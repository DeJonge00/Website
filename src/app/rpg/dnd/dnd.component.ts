import {Component, OnInit} from '@angular/core';
import {DndApiService} from '../../dnd-api.service';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DndComponent implements OnInit {

  sources: [{ 'name': string, 'enabled': boolean, 'id': number }];
  races: [{ 'name': string, 'id': number, 'source': number }];
  classes: [{ 'name': string, 'id': number, 'source': number }];
  subclasses: { string: [{ 'name': string, 'id': number, 'source': number }] };
  backgrounds: [{ 'name': string, 'id': number, 'source': number }];

  chosen_race: string;
  chosen_class: string;
  chosen_subclass: string;
  chosen_background: string;

  constructor(private api: DndApiService) {
  }

  ngOnInit() {
    this.api.getSources().subscribe(sources => {
      this.sources = sources;
      const s = this.sourceStringBuilder();
      this.getRaces(s);
      this.getClasses(s);
      this.getSubclasses(s);
      this.getBackgrounds(s);
    });
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

  getRaces(sources) {
    this.api.getRaces(sources).subscribe(races => {
      this.races = races;
    });
  }

  getClasses(sources) {
    this.api.getClasses(sources).subscribe(classes => {
      this.classes = classes;
    });
  }

  getSubclasses(sources) {
    this.api.getSubclasses(sources).subscribe(subclasses => {
      this.subclasses = subclasses;
    });
  }

  getBackgrounds(sources) {
    this.api.getBackgrounds(sources).subscribe(backgrounds => {
      this.backgrounds = backgrounds;
    });
  }

  onSelectRace(player_race) {
    this.chosen_race = player_race;
  }

  onSelectClass(player_class, player_subclass) {
    this.chosen_class = player_class;
    this.chosen_subclass = player_subclass;
  }

  onSelectBackground(player_bg) {
    this.chosen_background = player_bg;
  }

  onSelectSource(source) {
    for (const s of this.sources) {
      if (s.id === source) {
        s.enabled = !s.enabled;
      }
    }
    const str_source = this.sourceStringBuilder();
    this.getRaces(str_source);
    this.getClasses(str_source);
    this.getSubclasses(str_source);
    this.getBackgrounds(str_source);
  }
}
