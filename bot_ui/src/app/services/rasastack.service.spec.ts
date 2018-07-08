import { TestBed, inject } from '@angular/core/testing';

import { RasastackService } from './rasastack.service';

describe('RasastackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RasastackService]
    });
  });

  it('should be created', inject([RasastackService], (service: RasastackService) => {
    expect(service).toBeTruthy();
  }));
});
