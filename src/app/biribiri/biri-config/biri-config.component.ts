import {Component, OnInit} from '@angular/core';
import {DiscordApiService} from '../../discord-api.service';
import {GeneralApiService} from '../../general-api.service';

@Component({
  selector: 'app-biri-config',
  templateUrl: './biri-config.component.html',
  styleUrls: ['./biri-config.component.css']
})
export class BiriConfigComponent implements OnInit {

  servers;
  selection;
  config;

  constructor(private discord: DiscordApiService, private api: GeneralApiService) {
  }

  ngOnInit() {
    this.getServers(true);
  }

  getServers(resolve: boolean) {
    this.discord.getCommonServers(resolve).subscribe(servers => {
      this.servers = servers;
    });
  }

  channelIdToName(id: string) {
    for (const s of this.servers) {
      for (const c of s.channels.text) {
        console.log(c.channelid, c.name)
        if (c.channelid === id) {
          return c.name;
        }
      }
    }
    return 'Unknown Channel';
  }

  selectServer(server) {
    this.selection = server;
    this.api.getServerConfig(server.serverid).subscribe(data => {
      this.config = data;
    });
  }
}
