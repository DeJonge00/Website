import {Component, OnInit} from '@angular/core';
import {GeneralApiService} from '../../api-services/general-api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-biri-rpg',
  templateUrl: './biri-rpg.component.html',
  styleUrls: ['./biri-rpg.component.css']
})
export class BiriRpgComponent implements OnInit {

  players;
  page = 1;
  limit = 25;
  total_pages = 0;

  constructor(private api: GeneralApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.page = +params['page'];
      if (!this.page) {
        this.page = 1;
      }
      this.setPlayers();
    });
    this.setPageCount();
  }

  setPlayers() {
    this.api.getActiveUsersArgs(this.page, this.limit).subscribe(data => {
      this.players = data;
      console.log(data);
    });
  }

  setPageCount() {
    this.api.getActiveUsersCount().subscribe(data => {
      this.total_pages = Math.ceil(data.count / this.limit);
    });
  }

  getRank(player) {
    return 1 + this.players.indexOf(player) + (this.page - 1) * this.limit;
  }

  nums(l: number) {
    return Array(l).fill(0).map((x, i) => i + 1);
  }
}
