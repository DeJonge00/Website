import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url = environment.discord_login_url;
  name = '';

  constructor(private cookie: CookieService) { }

  ngOnInit() {
    const t = this.cookie.get('disname');
    if (t) {
      this.name = t;
    }
  }

  logout() {
    this.cookie.delete('distok');
    this.cookie.delete('disname');
    this.name = '';
  }
}
