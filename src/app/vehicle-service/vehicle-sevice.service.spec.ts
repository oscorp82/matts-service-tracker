import { TestBed, inject } from '@angular/core/testing';

import { VehicleSeviceService } from './vehicle-sevice.service';

describe('VehicleSeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleSeviceService]
    });
  });

  it('should ...', inject([VehicleSeviceService], (service: VehicleSeviceService) => {
    expect(service).toBeTruthy();
  }));
});
