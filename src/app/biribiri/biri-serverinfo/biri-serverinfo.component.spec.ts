import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriServerinfoComponent } from './biri-serverinfo.component';

describe('BiriServerinfoComponent', () => {
  let component: BiriServerinfoComponent;
  let fixture: ComponentFixture<BiriServerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiriServerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiriServerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
