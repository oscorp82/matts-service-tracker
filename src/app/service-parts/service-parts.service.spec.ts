import { TestBed, inject } from '@angular/core/testing';

import { ServicePartsService } from './service-parts.service';

describe('ServicePartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicePartsService]
    });
  });

  it('should ...', inject([ServicePartsService], (service: ServicePartsService) => {
    expect(service).toBeTruthy();
  }));
});
