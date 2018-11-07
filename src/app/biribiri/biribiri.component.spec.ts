import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiribiriComponent } from './biribiri.component';

describe('BiribiriComponent', () => {
  let component: BiribiriComponent;
  let fixture: ComponentFixture<BiribiriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiribiriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiribiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
