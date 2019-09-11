import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndSourceComponent } from './dnd-source.component';

describe('SourceComponent', () => {
  let component: DndSourceComponent;
  let fixture: ComponentFixture<DndSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
