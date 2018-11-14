import { Component, OnInit } from '@angular/core';
import {GeneralApiService} from '../../general-api.service';

@Component({
  selector: 'app-serverlist',
  templateUrl: './biri-serverlist.component.html',
  styleUrls: ['./biri-serverlist.component.css']
})
export class BiriServerlistComponent implements OnInit {

  servers;
  selected_server;

  constructor(private api: GeneralApiService) { }

  ngOnInit() {
    this.getServerList();
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
