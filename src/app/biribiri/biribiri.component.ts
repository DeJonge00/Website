import { Component, OnInit } from '@angular/core';
import {DiscordApiService} from '../api-services/discord-api.service';

@Component({
  selector: 'app-biribiri',
  templateUrl: './biribiri.component.html',
  styleUrls: ['./biribiri.component.css']
})
export class BiribiriComponent implements OnInit {

  constructor(private discord: DiscordApiService) { }

  ngOnInit() {
    this.discord.checkAuth();
  }
}
