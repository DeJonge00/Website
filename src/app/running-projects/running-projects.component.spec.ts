import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningProjectsComponent } from './running-projects.component';

describe('RunningProjectsComponent', () => {
  let component: RunningProjectsComponent;
  let fixture: ComponentFixture<RunningProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
