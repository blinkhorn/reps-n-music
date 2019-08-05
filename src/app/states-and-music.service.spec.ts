import { TestBed } from '@angular/core/testing';

import { StatesAndMusicService } from './states-and-music.service';

describe('StatesAndMusicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatesAndMusicService = TestBed.get(StatesAndMusicService);
    expect(service).toBeTruthy();
  });
});
