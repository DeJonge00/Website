import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GeneralApiService} from '../../api-services/general-api.service';

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

  descStr(d, a) {
    return d + ' for ' + a + ' minutes';
  }

  descToString(desc: number, minutes: number) {
    switch (desc) {
      case 0:
        return 'Lazing around';
      case 1:
        return this.descStr('Adventuring', minutes);
      case 2:
        return this.descStr('Training', minutes);
      case 3:
        return this.descStr('Preparing asi bossraid', minutes);
      case 4:
        return this.descStr('Wandering', minutes);
      case 5:
        return this.descStr('Working', minutes);
      default:
        return this.descStr(desc, minutes);
    }
  }

}
