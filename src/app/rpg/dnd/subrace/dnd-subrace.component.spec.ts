import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndSubraceComponent } from './dnd-subrace.component';

describe('SubraceComponent', () => {
  let component: DndSubraceComponent;
  let fixture: ComponentFixture<DndSubraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndSubraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndSubraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
