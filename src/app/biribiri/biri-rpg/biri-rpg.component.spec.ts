import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriRpgComponent } from './biri-rpg.component';

describe('BiriRpgComponent', () => {
  let component: BiriRpgComponent;
  let fixture: ComponentFixture<BiriRpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiriRpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiriRpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
