import { Component, OnInit } from '@angular/core';
import {GeneralApiService} from "../../general-api.service";

@Component({
  selector: 'app-biri-rpg',
  templateUrl: './biri-rpg.component.html',
  styleUrls: ['./biri-rpg.component.css']
})
export class BiriRpgComponent implements OnInit {

  players;

  constructor(private api: GeneralApiService) { }

  ngOnInit() {
    this.setPlayers();
  }

  setPlayers() {
    this.api.getActiveUsers().subscribe(data => {
      this.players = data;
      console.log(data)
    });
  }

}
