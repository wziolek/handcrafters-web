import { TestBed, inject } from '@angular/core/testing';

import { HandmasterService } from './handmaster.service';

describe('HandmasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandmasterService]
    });
  });

  it('should be created', inject([HandmasterService], (service: HandmasterService) => {
    expect(service).toBeTruthy();
  }));
});
