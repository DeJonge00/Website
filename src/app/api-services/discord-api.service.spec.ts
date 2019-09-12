import { TestBed } from '@angular/core/testing';

import { DiscordApiService } from './discord-api.service';

describe('DiscordApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscordApiService = TestBed.get(DiscordApiService);
    expect(service).toBeTruthy();
  });
});
