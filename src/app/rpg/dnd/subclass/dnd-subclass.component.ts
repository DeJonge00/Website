import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DndApiService} from '../../../api-services/dnd-api.service';
import {DiscordApiService} from '../../../api-services/discord-api.service';
import {markdown} from 'markdown';
import {DndClass, DndSource, DndSubclass} from '../dndobjects';

@Component({
  selector: 'app-subclass',
  templateUrl: './dnd-subclass.component.html',
  styleUrls: ['./dnd-subclass.component.css']
})
export class DndSubclassComponent implements OnInit {

  name: string;
  no_result = false;
  error: boolean;
  chosen_subclass: DndSubclass;

  creationForm: FormGroup;
  sources: [DndSource];
  classes: [DndClass];

  constructor(private activatedRoute: ActivatedRoute, private api: DndApiService, private fb: FormBuilder,
              private discord: DiscordApiService) {
  }

  ngOnInit() {
    this.getSubclassFromUrl();
  }

  getSubclassFromUrl() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');

      this.api.getSubclass(this.name).subscribe(result => {
        ['feature'].forEach(function (value) {
          if (result[value]) {
            result[value] = markdown.toHTML(result[value]);
          }
        });
        this.chosen_subclass = result;
        if (Object.keys(result).length === 0) {
          this.no_result = true;
          this.getSources();
          this.getClasses('all');
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
      name: [''],
      short_desc: [''],
      long_desc: [''],
      attributes: this.fb.array([
        this.createAttribute()
      ]),
      class: [''],
      source: [''],
      id: ['']
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

  getClasses(sources) {
    this.api.getClasses(sources).subscribe(classes => {
      this.classes = classes;
    });
  }

  saveNewSublass() {
    const vs = this.creationForm.value;
    const att = [];
    vs.attributes.forEach(function (value) {
      if (value.name && value.desc) {
        att.push(value);
      }
    });
    const r = {};
    const fields = [
      ['name', vs.name],
      ['short_desc', vs.short_desc],
      ['long_desc', vs.long_desc],
      ['attributes', att],
      ['class', +vs.class],
      ['source', +vs.source],
      ['id', +vs.id]
    ];

    fields.forEach(function (value) {
      if (value[1].length > 0) {
        r[value[0]] = value[1];
      }
    });

    console.log('Result', r);
    // this.api.createSubclass(r).subscribe(_ => {
    //   this.error = false;
    // });
  }
}
