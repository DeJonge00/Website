interface DndSource {
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

interface DndClassEnricher extends DndObject {
  prof_skills: string;
  prof_tools: string;
  languages: string;
  equipment: string;
}

interface DndClass extends DndClassEnricher {
  multiclass_req: string;
  level_table: string;
  hit_dice: string;
  hit_points_lvl_1: string;
  hit_points_higher_lvl: string;
  prof_armor: string;
  prof_weapons: string;
  prof_saving_throws: string;
}

interface DndSubclass extends DndObject {
  attributes: string;
  class: number;
}

interface DndRace extends DndObject {
  asi: string;
  age: string;
  alignment: string;
  size: string;
  speed: string;
  racial_abilities: string;
  languages: string;
}

interface DndSubrace extends DndObject {
  asi: string;
  attributes: string;
  race: number;
}

interface DndBackground extends DndClassEnricher {
  feature: string;
}
