import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriCommandsComponent } from './biri-commands.component';

describe('BiriCommandsComponent', () => {
  let component: BiriCommandsComponent;
  let fixture: ComponentFixture<BiriCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiriCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiriCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
