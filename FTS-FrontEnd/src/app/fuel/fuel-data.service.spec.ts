import { TestBed } from '@angular/core/testing';

import { FuelDataService } from './fuel-data.service';

describe('FuelDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuelDataService = TestBed.get(FuelDataService);
    expect(service).toBeTruthy();
  });
});
