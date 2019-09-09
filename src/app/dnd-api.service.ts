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

  createSource(options) {
    const url = this.api_url + 'source';
    return this.http.post<{ 'name': string, 'id': number, 'source': number }>(url, options, this.getHttpOptions());
  }

  getClasses(sources: string) {
    const url = this.api_url + 'class?source=' + sources;
    return this.http.get<[{ 'name': string, 'id': number, 'source': number }]>(url, this.getHttpOptions());
  }

  getClass(name_or_id: string) {
    const url = this.api_url + 'class/' + name_or_id;
    return this.http.get<{ 'name': string, 'id': number, 'source': number }>(url, this.getHttpOptions());
  }

  createClass(options) {
    const url = this.api_url + 'class';
    return this.http.post<{ 'name': string, 'id': number, 'source': number }>(url, options, this.getHttpOptions());
  }

  getSubclasses(sources: string) {
    const url = this.api_url + 'subclass?source=' + sources;
    return this.http.get<{ string: [{ 'name': string, 'id': number, 'source': number }] }>(url, this.getHttpOptions());
  }

  createSubclass(options) {
    const url = this.api_url + 'subclass';
    return this.http.post<{ 'name': string, 'id': number, 'source': number }>(url, options, this.getHttpOptions());
  }

  getRaces(sources: string) {
    const url = this.api_url + 'race?source=' + sources;
    return this.http.get<[{ 'name': string, 'id': number, 'source': number }]>(url, this.getHttpOptions());
  }

  getRace(name_or_id: string) {
    const url = this.api_url + 'race/' + name_or_id;
    return this.http.get<{ 'name': string, 'id': number, 'source': number }>(url, this.getHttpOptions());
  }

  createRace(options) {
    const url = this.api_url + 'race';
    return this.http.post<{ 'name': string, 'id': number, 'source': number }>(url, options, this.getHttpOptions());
  }

  getBackgrounds(sources: string) {
    const url = this.api_url + 'background?source=' + sources;
    return this.http.get<[{ 'name': string, 'id': number, 'source': number }]>(url, this.getHttpOptions());
  }
}
