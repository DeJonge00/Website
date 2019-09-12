import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DndApiService} from '../../../api-services/dnd-api.service';
import {DiscordApiService} from '../../../api-services/discord-api.service';
import {DndSource} from '../dndobjects';

@Component({
  selector: 'app-source',
  templateUrl: './dnd-source.component.html',
  styleUrls: ['./dnd-source.component.css']
})
export class DndSourceComponent implements OnInit {

  name: string;
  no_result = false;
  error: boolean;
  chosen_source: DndSource;

  channelForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private api: DndApiService, private fb: FormBuilder,
              private discord: DiscordApiService) {
  }

  ngOnInit() {
    this.getSourceFromUrl();
  }

  getSourceFromUrl() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');

      this.api.getSource(this.name).subscribe(result => {
        this.chosen_source = result;
        if (Object.keys(result).length === 0) {
          this.no_result = true;
          this.setForm();
        }
      });
    });
  }

  setForm() {
    this.channelForm = this.fb.group({
      name: '',
      short_name: '',
      enabled: '',
      id: ''
    });
  }

  saveNewSource() {
    const vs = this.channelForm.value;
    const r = {};
    if (vs.enabled === 'Enabled') {
      r['enabled'] = true;
    } else {
      if (vs.enabled === 'Disabled') {
        r['enabled'] = false;
      }
    }
    const fields = [
      ['name', vs.name],
      ['short_name', vs.short_name],
      ['id', +vs.id]
    ];

    fields.forEach(function (value) {
      if (value[1]) {
        r[value[0]] = value[1];
      }
    });
    this.api.createSource(r).subscribe(_ => {
      this.error = false;
    });
  }
}
