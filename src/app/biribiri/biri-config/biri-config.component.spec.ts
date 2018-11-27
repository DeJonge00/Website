import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriConfigComponent } from './biri-config.component';

describe('BiriConfigComponent', () => {
  let component: BiriConfigComponent;
  let fixture: ComponentFixture<BiriConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiriConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiriConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
