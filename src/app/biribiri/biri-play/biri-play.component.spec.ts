import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriPlayComponent } from './biri-play.component';

describe('BiriPlayComponent', () => {
  let component: BiriPlayComponent;
  let fixture: ComponentFixture<BiriPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiriPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiriPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
