export interface DndSource {
  name: string;
  short_name: string;
  enabled: boolean;
  id: number;
}

interface DndObject {
  name: string;
  short_desc: string;
  long_desc: string;
  source: number;
  id: number;
}

export interface DndAttribute {
  name: string;
  desc: string;
}

interface DndClassEnricher extends DndObject {
  prof_skills: string;
  prof_tools: string;
  languages: string;
  equipment: string;
}

export interface DndClass extends DndClassEnricher {
  multiclass_req: string;
  level_table: string;
  hit_dice: string;
  hit_points_lvl_1: string;
  hit_points_higher_lvl: string;
  prof_armor: string;
  prof_weapons: string;
  prof_saving_throws: string;
}

export interface DndSubclass extends DndObject {
  attributes: [DndAttribute];
  class: number;
}

export interface DndRace extends DndObject {
  asi: string;
  age: string;
  alignment: string;
  size: string;
  speed: string;
  racial_abilities: string;
  languages: string;
}

export interface DndSubrace extends DndObject {
  asi: string;
  attributes: [DndAttribute];
  race: number;
}

export interface DndBackground extends DndClassEnricher {
  feature: string;
}

export const ASI = [
  {id: 1, short_name: 'STR', name: 'Strength'},
  {id: 2, short_name: 'DEX', name: 'Dexterity'},
  {id: 3, short_name: 'CON', name: 'Constitution'},
  {id: 4, short_name: 'INT', name: 'Intelligence'},
  {id: 5, short_name: 'WIS', name: 'Wisdom'},
  {id: 6, short_name: 'CHA', name: 'Charisma'}
];
