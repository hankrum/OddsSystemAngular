import { TestBed } from '@angular/core/testing';

import { SportEventService } from './sport-event.service';

describe('SportEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportEventService = TestBed.get(SportEventService);
    expect(service).toBeTruthy();
  });
});
