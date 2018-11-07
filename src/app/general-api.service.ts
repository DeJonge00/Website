import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {

  constructor() {
  }

  getCommandData() {
    // TODO Request api data
    return [
      {"command": "echo", "timestamp": 1541600802.59, "location": "'Underworld':'development':'Nya'"},
      {"command": "rpg info", "timestamp": 1541601226.46, "location": "Underworld/development/Nya"},
      {"command": "rpg adventure", "timestamp": 1541601232.194, "location": "Underworld/development/Nya"},
      {"command": "rpg adventure", "timestamp": 1541601316.221, "location": "Underworld/development/Nya"},
      {"command": "rpg adventure", "timestamp": 1541601858.907, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541601862.445, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541602330.499, "location": "Underworld/development/Nya"},
      {"command": "rpg adventure", "timestamp": 1541602564.029, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541602568.732, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541602762.615, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541602873.989, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541602987.156, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541603017.702, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541603052.924, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541603204.125, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541603329.696, "location": "Underworld/development/Nya"},
      {"command": "rpg adventure", "timestamp": 1541603542.474, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541604396.311, "location": "Underworld/development/Nya"},
      {"command": "rpg levelup", "timestamp": 1541604408.191, "location": "Underworld/development/Nya"},
      {"command": "rpg info", "timestamp": 1541604416.544, "location": "Underworld/development/Nya"}
    ];
  }

  getActiveUsers() {
    // TODO Request api data
    return [
      {'name': 'id_1', 'exp': 1000},
      {'name': 'id_2', 'exp': 900},
      {'name': 'id_3', 'exp': 800}
    ]
  }
}
