import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriHelpComponent } from './biri-help.component';

describe('BiriHelpComponent', () => {
  let component: BiriHelpComponent;
  let fixture: ComponentFixture<BiriHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiriHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiriHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
