import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndClassComponent } from './dnd-class.component';

describe('ClassComponent', () => {
  let component: DndClassComponent;
  let fixture: ComponentFixture<DndClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
