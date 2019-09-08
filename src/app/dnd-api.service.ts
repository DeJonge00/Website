import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DndApiService {

  api_url = environment.api_url + 'rpg/dnd/';

  constructor(private http: HttpClient) {
  }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': 'Basic ' + btoa(environment.api_username + ':' + environment.api_password)
      })
    };
  }

  getSources() {
    const url = this.api_url + 'source';
    return this.http.get<[{ 'name': string, 'shortname': string, 'id': number, 'enabled': boolean }]>(url, this.getHttpOptions());
  }

  getClasses(sources: string) {
    const url = this.api_url + 'class?source=' + sources;
    return this.http.get<[{ 'name': string, 'id': number, 'source': number }]>(url, this.getHttpOptions());
  }

  getSubclasses(sources: string) {
    const url = this.api_url + 'subclass?source=' + sources;
    return this.http.get<{ string: [string] }>(url, this.getHttpOptions());
  }

  getRaces(sources: string) {
    const url = this.api_url + 'race?source=' + sources;
    return this.http.get<[{ 'name': string, 'id': number, 'source': number }]>(url, this.getHttpOptions());
  }

  getBackgrounds(sources: string) {
    const url = this.api_url + 'background?source=' + sources;
    console.log(url);
    return this.http.get<[{ 'name': string, 'id': number, 'source': number }]>(url, this.getHttpOptions());
  }
}
