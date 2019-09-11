import {Component, OnInit} from '@angular/core';
import {DiscordApiService} from '../../ApiServices/discord-api.service';
import {GeneralApiService} from '../../ApiServices/general-api.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-biri-config',
  templateUrl: './biri-config.component.html',
  styleUrls: ['./biri-config.component.css']
})
export class BiriConfigComponent implements OnInit {

  servers;
  selection;
  config;

  error;

  channelForm: FormGroup;

  constructor(private discord: DiscordApiService, private api: GeneralApiService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getServers(true);
  }

  getServers(resolve: boolean) {
    this.discord.getCommonServers(resolve).subscribe(servers => {
      this.servers = servers;
    });
  }

  IdToChannel(id: string) {
    for (const s of this.servers) {
      for (const c of s.channels.text) {
        if (c.channelid === id) {
          return c;
        }
      }
    }
    return {'name': 'Unknown Channel'};
  }

  selectServer(server) {
    this.selection = server;
    this.api.getServerConfig(server.serverid).subscribe(data => {
      this.config = data;
      this.channelForm = this.fb.group({
        welcomeChannel: this.IdToChannel(this.config.welcome.id).channelid,
        welcomeText: this.config.welcome.text,
        goodbyeChannel: this.IdToChannel(this.config.goodbye.id).channelid,
        goodbyeText: this.config.goodbye.text,
        starChannel: this.IdToChannel(this.config.star).channelid,
        prefix: this.config.prefix,
        delete_commands: this.config.delete_commands
      });
    });
  }

  saveConfigChanges() {
    const vs = this.channelForm.value;
    this.api.setServerConfig(this.selection.serverid, {
      'welcome': {'id': vs.welcomeChannel, 'text': vs.welcomeText},
      'goodbye': {'id': vs.goodbyeChannel, 'text': vs.goodbyeText},
      'star': vs.starChannel,
      'prefix': vs.prefix,
      'delete_commands': vs.delete_commands
    }).subscribe(data => {
      this.error = false;
    });
  }
}
