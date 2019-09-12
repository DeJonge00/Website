import { Component, OnInit } from '@angular/core';
import {GeneralApiService} from '../../api-services/general-api.service';
import {DiscordApiService} from '../../api-services/discord-api.service';

@Component({
  selector: 'app-serverlist',
  templateUrl: './biri-serverlist.component.html',
  styleUrls: ['./biri-serverlist.component.css']
})
export class BiriServerlistComponent implements OnInit {

  servers;
  selected_server;

  constructor(private api: GeneralApiService, private discord: DiscordApiService) { }

  ngOnInit() {
    if (this.discord.is_admin) {
      this.getServerList();
    }
  }

  getServerList() {
    this.api.getServerList().subscribe(data => {
      this.servers = data;
    });
  }

  selectServer(server) {
    this.selected_server = server;
  }
}
