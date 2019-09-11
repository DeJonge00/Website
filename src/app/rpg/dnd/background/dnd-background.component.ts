import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DndApiService} from '../../../ApiServices/dnd-api.service';
import {DiscordApiService} from '../../../ApiServices/discord-api.service';
import {markdown} from 'markdown';

@Component({
  selector: 'app-dnd-background',
  templateUrl: './dnd-background.component.html',
  styleUrls: ['./dnd-background.component.css']
})
export class DndBackgroundComponent implements OnInit {

  name: string;
  no_result = false;
  error: boolean;
  chosen_bg: DndBackground;

  channelForm: FormGroup;
  sources: [DndSource];
  backgrounds: [DndBackground];

  constructor(private activatedRoute: ActivatedRoute, private api: DndApiService, private fb: FormBuilder,
              private discord: DiscordApiService) {
  }

  ngOnInit() {
    this.getBackgroundFromUrl();
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

  getBackgroundFromUrl() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');

      this.api.getBackground(this.name).subscribe(result => {
        this.chosen_bg = result;
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
      this.getBackgrounds(s);
    });
  }

  setForm() {
    this.channelForm = this.fb.group({
      name: '',
      short_desc: '',
      long_desc: '',
      prof_tools: '',
      prof_saving_throws: '',
      prof_skills: '',
      languages: '',
      equipment: '',
      feature: '',
      attributes: '',
      source: '0',
      id: ''
    });
  }

  getBackgrounds(sources) {
    this.api.getBackgrounds(sources).subscribe(backgrounds => {
      this.backgrounds = backgrounds;
    });
  }

  saveNewBackground() {
    const vs = this.channelForm.value;
    const r = {};
    const fields = [
      ['name', vs.name],
      ['short_desc', vs.short_desc],
      ['long_desc', vs.long_desc],
      ['languages', vs.languages],
      ['prof_tools', vs.prof_tools],
      ['prof_skills', vs.prof_skills],
      ['equipment', vs.equipment],
      ['feature', vs.feature],
      ['attributes', vs.attributes],
      ['source', vs.source],
      ['id', +vs.id]
    ];

    fields.forEach(function (value) {
      if (value[1]) {
        r[value[0]] = value[1];
      }
    });
    this.api.createBackground(r).subscribe(_ => {
      this.error = false;
    });
  }
}
