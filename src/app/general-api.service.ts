import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {reflectTypeEntityToDeclaration} from '@angular/compiler-cli/src/ngtsc/metadata';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {

  constructor(private http: HttpClient) {
  }

  getCommandData() {
    return this.http.get(environment.api_url + 'commands', this.getHttpOptions());
  }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Authorization': 'Basic ' + btoa(environment.api_username + ':' + environment.api_password)
      })
    };
  }

  getActiveUsers() {
    return this.getActiveUsersArgs(1, 25);
  }

  getActiveUsersArgs(page, limit) {
    return this.http.get(environment.api_url + 'rpg/players?page=' + page + '&limit=' + limit, this.getHttpOptions());
  }

  getActiveUsersCount(): Observable<{'count': number}> {
    return this.http.get<{'count': number}>(environment.api_url + 'rpg/players/count', this.getHttpOptions());
  }

  getPlayerData(id: string) {
    return this.http.get(environment.api_url + 'rpg/players/' + id, this.getHttpOptions());
  }

  getServerList() {
    return this.http.get(environment.api_url + 'servers', this.getHttpOptions());
  }

  getServer(id: string) {
    return this.http.get(environment.api_url + 'servers/' + id, this.getHttpOptions());
  }

  getServerConfig(id: string) {
    return this.http.get(environment.api_url + 'servers/' + id + '/config', this.getHttpOptions());
  }

  setServerConfig(id: string, config: {}) {
    return this.http.post(environment.api_url + 'servers/' + id + '/config', config, this.getHttpOptions());
  }
}
