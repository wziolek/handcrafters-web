import { TestBed, inject } from '@angular/core/testing';

import { HandcrafterService } from './handcrafter.service';

describe('HandcrafterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HandcrafterService]
    });
  });

  it('should be created', inject([HandcrafterService], (service: HandcrafterService) => {
    expect(service).toBeTruthy();
  }));
});
