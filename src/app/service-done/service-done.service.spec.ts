import { TestBed, inject } from '@angular/core/testing';

import { ServiceDoneService } from './service-done.service';

describe('ServiceDoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceDoneService]
    });
  });

  it('should ...', inject([ServiceDoneService], (service: ServiceDoneService) => {
    expect(service).toBeTruthy();
  }));
});
