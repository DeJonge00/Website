import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndRaceComponent } from './dnd-race.component';

describe('RaceComponent', () => {
  let component: DndRaceComponent;
  let fixture: ComponentFixture<DndRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
