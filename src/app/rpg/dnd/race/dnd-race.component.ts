import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DndApiService} from '../../../ApiServices/dnd-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DiscordApiService} from '../../../ApiServices/discord-api.service';

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

  channelForm: FormGroup;
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
    this.channelForm = this.fb.group({
      name: '',
      short_desc: '',
      long_desc: '',
      asi: '',
      age: '',
      alignment: '',
      size: '',
      speed: '',
      racial_abilities: '',
      languages: '',
      source: '',
      id: ''
    });
  }

  getRaces(sources) {
    this.api.getRaces(sources).subscribe(races => {
      this.races = races;
    });
  }

  saveNewRace() {
    const vs = this.channelForm.value;
    const r = {};
    const fields = [
      ['name', vs.name],
      ['short_desc', vs.short_desc],
      ['long_desc', vs.long_desc],
      ['asi', vs.asi],
      ['age', vs.age],
      ['alignment', vs.alignment],
      ['size', vs.size],
      ['speed', vs.speed],
      ['racial_abilities', vs.racial_abilities],
      ['languages', vs.languages],
      ['source', +vs.source],
      ['id', +vs.id]
    ];
    fields.forEach(function (value) {
      if (value[1]) {
        r[value[0]] = value[1];
      }
    });
    this.api.createRace(r).subscribe(_ => {
      this.error = false;
    });
  }
}
