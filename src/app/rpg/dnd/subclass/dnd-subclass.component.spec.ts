import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndSubclassComponent } from './dnd-subclass.component';

describe('SubclassComponent', () => {
  let component: DndSubclassComponent;
  let fixture: ComponentFixture<DndSubclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndSubclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndSubclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
