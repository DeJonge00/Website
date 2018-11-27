import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordLoginComponent } from './discord-login.component';

describe('DiscordLoginComponent', () => {
  let component: DiscordLoginComponent;
  let fixture: ComponentFixture<DiscordLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscordLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
