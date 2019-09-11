import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DndApiService} from '../../../ApiServices/dnd-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DiscordApiService} from '../../../ApiServices/discord-api.service';
import {markdown} from 'markdown';

@Component({
  selector: 'app-class',
  templateUrl: './dnd-class.component.html',
  styleUrls: ['./dnd-class.component.css']
})
export class DndClassComponent implements OnInit {

  name: string;
  no_result = false;
  error: boolean;
  chosen_class: DndClass;

  channelForm: FormGroup;
  sources = [];
  classes = [];

  constructor(private activatedRoute: ActivatedRoute, private api: DndApiService, private fb: FormBuilder,
              private discord: DiscordApiService) {
  }

  ngOnInit() {
    this.getClassFromUrl();
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

  getClassFromUrl() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');

      this.api.getClass(this.name).subscribe(result => {
        ['level_table', 'equipment'].forEach(function (value) {
          if (result[value]) {
            result[value] = markdown.toHTML(result[value]);
          }
        });
        this.chosen_class = result;
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
      this.getClasses(s);
    });
  }

  setForm() {
    this.channelForm = this.fb.group({
      name: '',
      short_desc: '',
      long_desc: '',
      multiclass_req: '',
      level_table: '',
      hit_dice: '',
      hit_points_lvl_1: '',
      hit_points_higher_lvl: '',
      prof_armor: '',
      prof_weapons: '',
      prof_tools: '',
      prof_saving_throws: '',
      prof_skills: '',
      equipment: '',
      class_features: '',
      source: '0',
      id: ''
    });
  }

  getClasses(sources) {
    this.api.getClasses(sources).subscribe(classes => {
      this.classes = classes;
    });
  }

  saveNewClass() {
    const vs = this.channelForm.value;
    const r = {};
    const fields = [
      ['name', vs.name],
      ['short_desc', vs.short_desc],
      ['long_desc', vs.long_desc],
      ['multiclass_req', vs.multiclass_req],
      ['level_table', vs.level_table],
      ['hit_dice', vs.hit_dice],
      ['hit_points_lvl_1', vs.hit_points_lvl_1],
      ['hit_points_higher_lvl', vs.hit_points_higher_lvl],
      ['prof_armor', vs.prof_armor],
      ['prof_weapons', vs.prof_weapons],
      ['prof_tools', vs.prof_tools],
      ['prof_saving_throws', vs.prof_saving_throws],
      ['prof_skills', vs.prof_skills],
      ['equipment', vs.equipment],
      ['class_features', vs.class_features],
      ['source', +vs.source],
      ['id', +vs.id]
    ];

    fields.forEach(function (value) {
      if (value[1]) {
        r[value[0]] = value[1];
      }
    });
    console.log(r);

    this.api.createClass(r).subscribe(_ => {
      this.error = false;
    });
  }
}
