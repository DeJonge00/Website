import { Component, OnInit } from '@angular/core';
import {GeneralApiService} from "../../general-api.service";

@Component({
  selector: 'app-biri-commands',
  templateUrl: './biri-commands.component.html',
  styleUrls: ['./biri-commands.component.css']
})
export class BiriCommandsComponent implements OnInit {

  commands_data;

  constructor(private generalApiService: GeneralApiService) { }

  ngOnInit() {
    this.get_commands_data();
  }

  get_commands_data() {
    this.generalApiService.getCommandData().subscribe(data => {
      this.commands_data = data;
    });
  }

}
