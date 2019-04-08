import { TestBed } from '@angular/core/testing';

import { StationService } from './station.service';

describe('StationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be postd', () => {
    const service: StationService = TestBed.get(StationService);
    expect(service).toBeTruthy();
  });
});
