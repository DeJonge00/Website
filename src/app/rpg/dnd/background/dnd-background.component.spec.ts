import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndBackgroundComponent } from './dnd-background.component';

describe('DndBackgroundComponent', () => {
  let component: DndBackgroundComponent;
  let fixture: ComponentFixture<DndBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
