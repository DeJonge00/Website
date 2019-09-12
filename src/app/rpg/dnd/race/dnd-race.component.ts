import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DndApiService} from '../../../api-services/dnd-api.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {DiscordApiService} from '../../../api-services/discord-api.service';
import {ASI, DndRace} from '../dndobjects';

@Component({
  selector: 'app-race',
  templateUrl: './dnd-race.component.html',
  styleUrls: ['./dnd-race.component.css']
})
export class DndRaceComponent implements OnInit {

  name: string;
  no_result = false;
  error: boolean;
  chosen_race: DndRace;
  ASI = ASI;

  creationForm: FormGroup;
  sources = [];
  races = [];

  constructor(private activatedRoute: ActivatedRoute, private api: DndApiService, private fb: FormBuilder,
              private discord: DiscordApiService) {
  }

  ngOnInit() {
    this.getRaceFromUrl();
  }

  sourceStringBuilder() {
    const s = [];
    for (const source of this.sources) {
      if (source.enabled) {
        s.push(source.id);
      }
    }
    return s.join(',');
  }

  getRaceFromUrl() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');

      this.api.getRace(this.name).subscribe(result => {
        this.chosen_race = result;
        if (Object.keys(result).length === 0) {
          this.no_result = true;
          this.getSources();
          this.setForm();
        }
      });
    });
  }

  getSources() {
    this.api.getSources().subscribe(sources => {
      this.sources = sources;
      const s = this.sourceStringBuilder();
      this.getRaces(s);
    });
  }

  setForm() {
    this.creationForm = this.fb.group({
      name: '',
      short_desc: '',
      long_desc: '',
      asi: this.fb.array([this.createAsi()]),
      age: '',
      alignment: '',
      size: '',
      speed: '',
      racial_abilities: this.fb.array([
        this.createAbility()
      ]),
      languages: '',
      source: '',
      id: ''
    });
  }

  get racial_abilities() {
    return this.creationForm.get('racial_abilities') as FormArray;
  }

  createAbility() {
    return this.fb.group({
      name: this.fb.control(''),
      desc: this.fb.control('')
    });
  }

  removeAbility(index: number): void {
    this.racial_abilities.removeAt(index);
  }

  addAbility() {
    this.racial_abilities.push(this.createAbility());
  }

  get asi_list() {
    return this.creationForm.get('asi') as FormArray;
  }

  createAsi() {
    return this.fb.group({
      name: this.fb.control(''),
      value: this.fb.control('')
    });
  }

  removeAsi(index: number): void {
    this.asi_list.removeAt(index);
  }

  addAsi() {
    this.asi_list.push(this.createAsi());
  }

  getRaces(sources) {
    this.api.getRaces(sources).subscribe(races => {
      this.races = races;
    });
  }

  saveNewRace() {
    const vs = this.creationForm.value;
    // Racial abilities
    const ra = [];
    vs.racial_abilities.forEach(function (v) {
      if (v.name && v.desc) {
        ra.push(v);
      }
    });
    // Ability score increases
    const asi = [];
    vs.asi.forEach(function (v) {
      if (v.name && v.value) {
        asi.push(v);
      }
    });

    const r = {};
    const fields = [
      ['name', vs.name],
      ['short_desc', vs.short_desc],
      ['long_desc', vs.long_desc],
      ['asi', asi],
      ['age', vs.age],
      ['alignment', vs.alignment],
      ['size', vs.size],
      ['speed', vs.speed],
      ['racial_abilities', ra],
      ['languages', vs.languages],
      ['source', +vs.source],
      ['id', +vs.id]
    ];
    fields.forEach(function (value) {
      if (value[1].length > 0) {
        r[value[0]] = value[1];
      }
    });
    console.log('Result', r);
    // this.api.createRace(r).subscribe(_ => {
    //   this.error = false;
    // });
  }
}
