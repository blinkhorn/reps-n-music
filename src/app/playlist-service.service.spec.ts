import { TestBed } from '@angular/core/testing';

import { PlaylistServiceService } from './playlist-service.service';

describe('PlaylistServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistServiceService = TestBed.get(PlaylistServiceService);
    expect(service).toBeTruthy();
  });
});
