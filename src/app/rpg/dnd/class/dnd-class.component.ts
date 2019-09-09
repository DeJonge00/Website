import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DndApiService} from '../../../dnd-api.service';

@Component({
  selector: 'app-class',
  templateUrl: './dnd-class.component.html',
  styleUrls: ['./dnd-class.component.css']
})
export class DndClassComponent implements OnInit {

  name: string;
  no_result = false;
  chosen_class: { 'name': string, 'id': number, 'source': number };

  constructor(private activatedRoute: ActivatedRoute, private api: DndApiService) {
  }

  ngOnInit() {
    this.getClassFromUrl();
  }

  getClassFromUrl() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');

      this.api.getClass(this.name).subscribe(result => {
        this.chosen_class = result;
        if (Object.keys(result).length === 0) {
          this.no_result = true;
        }
      });
    });
  }
}
