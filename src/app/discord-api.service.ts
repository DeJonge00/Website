import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscordApiService {

  api_url = environment.api_url + 'discord/';
  is_admin = false;

  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': 'Basic ' + btoa(environment.api_username + ':' + environment.api_password)
      }),
      params: new HttpParams().set('token', this.getToken())
    };
  }

  getToken() {
    return this.cookie.get('distok');
  }

  checkAuth() {
    this.getUser().subscribe(data => {
      console.log(data, environment.discord_admin_ids, environment.discord_admin_ids.includes(data.id));
      if (environment.discord_admin_ids.includes(data.id)) {
        this.is_admin = true;
      }
    });
  }

  getUser(): Observable<{'id': string, 'username': string}> {
    return this.http.get<{'id': string, 'username': string}>(this.api_url + 'users/@me', this.getHttpOptions());
  }

  getCommonServers(resolve: boolean) {
    return this.http.get<[string]>(this.api_url + 'users/@me/guilds?resolve_channels=' + resolve, this.getHttpOptions());
  }
}
