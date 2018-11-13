import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GeneralApiService} from '../../general-api.service';

@Component({
  selector: 'app-biri-playerinfo',
  templateUrl: './biri-playerinfo.component.html',
  styleUrls: ['./biri-playerinfo.component.css']
})
export class BiriPlayerinfoComponent implements OnInit {

  player_id: string;
  player;

  constructor(private route: ActivatedRoute, private api: GeneralApiService) {
  }

  ngOnInit() {
    this.player_id = this.route.snapshot.paramMap.get('name');
    this.getPlayerData();
  }

  getPlayerData() {
    this.api.getPlayerData(this.player_id).subscribe(data => {
      this.player = data;
      console.log(data);
    });
  }

}
