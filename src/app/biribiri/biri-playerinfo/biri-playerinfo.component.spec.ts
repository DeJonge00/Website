import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriPlayerinfoComponent } from './biri-playerinfo.component';

describe('BiriPlayerinfoComponent', () => {
  let component: BiriPlayerinfoComponent;
  let fixture: ComponentFixture<BiriPlayerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiriPlayerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiriPlayerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
