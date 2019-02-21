import {Component, OnInit} from '@angular/core';
import {DiscordApiService} from '../discord-api.service';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute} from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-discord-login',
  templateUrl: './discord-login.component.html',
  styleUrls: ['./discord-login.component.css']
})
export class DiscordLoginComponent implements OnInit {

  token: string;
  name: string;

  constructor(private discord: DiscordApiService, private cookie: CookieService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setTokenCookie();
  }

  setTokenCookie() {
    this.route.fragment.subscribe(f => {
      const fragments = f.split('&');
      let token: string;
      let exp: number;
      for (const s of fragments) {
        const kv = s.split('=');
        if (kv[0] === 'access_token') {
          token = kv[1];
        } else if (kv[0] === 'expires_in') {
          exp = +kv[1];
        }
      }
      console.log(token, exp);
      this.cookie.set('distok', token, exp);
      this.token = this.cookie.get('distok');
      this.discord.checkAuth();
      this.getName(exp);
    });
  }

  getName(exp) {
    this.discord.getUser().subscribe(data => {
      this.name = data.username;
      this.cookie.set('disname', data.username, exp);
    });
  }
}
