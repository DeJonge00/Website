import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

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
    return this.http.get<[DndSource]>(url, this.getHttpOptions());
  }

  getSource(name_or_id: string) {
    const url = this.api_url + 'source/' + name_or_id;
    return this.http.get<DndSource>(url, this.getHttpOptions());
  }

  createSource(options) {
    const url = this.api_url + 'source';
    return this.http.post<DndSource>(url, options, this.getHttpOptions());
  }

  getClasses(sources: string) {
    const url = this.api_url + 'class?source=' + sources;
    return this.http.get<[DndClass]>(url, this.getHttpOptions());
  }

  getClass(name_or_id: string) {
    const url = this.api_url + 'class/' + name_or_id;
    return this.http.get<DndClass>(url, this.getHttpOptions());
  }

  createClass(options) {
    const url = this.api_url + 'class';
    return this.http.post<{}>(url, options, this.getHttpOptions());
  }

  getSubclasses(sources: string) {
    const url = this.api_url + 'subclass?source=' + sources;
    return this.http.get<{ string: [DndSubclass] }>(url, this.getHttpOptions());
  }

  createSubclass(options) {
    const url = this.api_url + 'subclass';
    return this.http.post<{}>(url, options, this.getHttpOptions());
  }

  getRaces(sources: string) {
    const url = this.api_url + 'race?source=' + sources;
    return this.http.get<[DndRace]>(url, this.getHttpOptions());
  }

  getRace(name_or_id: string) {
    const url = this.api_url + 'race/' + name_or_id;
    return this.http.get<DndRace>(url, this.getHttpOptions());
  }

  createRace(options) {
    const url = this.api_url + 'race';
    return this.http.post<{}>(url, options, this.getHttpOptions());
  }

  getSubraces(sources: string) {
    const url = this.api_url + 'subrace?source=' + sources;
    return this.http.get<{string: [DndSubrace]}>(url, this.getHttpOptions());
  }

  getSubrace(name_or_id: string) {
    const url = this.api_url + 'subrace/' + name_or_id;
    return this.http.get<DndSubrace>(url, this.getHttpOptions());
  }

  createSubrace(options) {
    const url = this.api_url + 'subrace';
    return this.http.post<{}>(url, options, this.getHttpOptions());
  }

  getBackgrounds(sources: string) {
    const url = this.api_url + 'background?source=' + sources;
    return this.http.get<[DndBackground]>(url, this.getHttpOptions());
  }

  getBackground(name_or_id: string) {
    const url = this.api_url + 'background/' + name_or_id;
    return this.http.get<DndBackground>(url, this.getHttpOptions());
  }

  createBackground(options) {
    const url = this.api_url + 'background';
    return this.http.post<{}>(url, options, this.getHttpOptions());
  }
}
