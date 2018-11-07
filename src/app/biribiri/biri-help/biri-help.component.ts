import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biri-help',
  templateUrl: './biri-help.component.html',
  styleUrls: ['./biri-help.component.css']
})
export class BiriHelpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onMarkdownLoad(event) {
    console.log('Biri help markdown loaded');
  }

  onMarkdownError(error) {
    console.log('Biri help markdown failed to load');
  }
}
