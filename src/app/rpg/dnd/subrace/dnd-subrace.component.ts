import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DndApiService} from '../../../api-services/dnd-api.service';
import {DiscordApiService} from '../../../api-services/discord-api.service';
import {markdown} from 'markdown';
import {ASI, DndRace, DndSource, DndSubrace} from '../dndobjects';

@Component({
  selector: 'app-subrace',
  templateUrl: './dnd-subrace.component.html',
  styleUrls: ['./dnd-subrace.component.css']
})
export class DndSubraceComponent implements OnInit {

  name: string;
  no_result = false;
  error: boolean;
  chosen_subrace: DndSubrace;
  ASI = ASI;

  creationForm: FormGroup;
  sources: [DndSource];
  races: [DndRace];

  constructor(private activatedRoute: ActivatedRoute, private api: DndApiService, private fb: FormBuilder,
              private discord: DiscordApiService) {
  }

  ngOnInit() {
    this.getSubraceFromUrl();
  }

  getSubraceFromUrl() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');

      this.api.getSubrace(this.name).subscribe(result => {
        ['feature'].forEach(function (value) {
          if (result[value]) {
            result[value] = markdown.toHTML(result[value]);
          }
        });
        this.chosen_subrace = result;
        if (Object.keys(result).length === 0) {
          this.no_result = true;
          this.getSources();
          this.getRaces('all');
          this.setForm();
        }
      });
    });
  }

  getSources() {
    this.api.getSources().subscribe(sources => {
      this.sources = sources;
    });
  }

  setForm() {
    this.creationForm = this.fb.group({
      name: '',
      short_desc: '',
      long_desc: '',
      attributes: this.fb.array([this.createAttribute()]),
      race: '',
      asi: this.fb.array([this.createAsi()]),
      source: '0',
      id: ''
    });
  }

  get attributes() {
    return this.creationForm.get('attributes') as FormArray;
  }

  createAttribute(): FormGroup {
    return this.fb.group({
      name: this.fb.control(''),
      desc: this.fb.control('')
    });
  }

  removeAttribute(index: number): void {
    this.attributes.removeAt(index);
  }

  addAttribute() {
    this.attributes.push(this.createAttribute());
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

  saveNewSublass() {
    const vs = this.creationForm.value;
    const r = {};
    const fields = [
      ['name', vs.name],
      ['short_desc', vs.short_desc],
      ['long_desc', vs.long_desc],
      ['attributes', vs.attributes],
      ['race', +vs.race],
      ['asi', vs.asi],
      ['source', +vs.source],
      ['id', +vs.id]
    ];

    fields.forEach(function (value) {
      if (value[1]) {
        r[value[0]] = value[1];
      }
    });

    this.api.createSubrace(r).subscribe(_ => {
      this.error = false;
    });
  }
}
