import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiriServerlistComponent } from './biri-serverlist.component';

describe('BiriServerlistComponent', () => {
  let component: BiriServerlistComponent;
  let fixture: ComponentFixture<BiriServerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiriServerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiriServerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
