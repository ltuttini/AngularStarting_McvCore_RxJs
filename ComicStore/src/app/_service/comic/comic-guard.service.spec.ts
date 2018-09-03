import { TestBed, inject } from '@angular/core/testing';

import { ComicGuardService } from './comic-guard.service';

describe('ComicGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicGuardService]
    });
  });

  it('should be created', inject([ComicGuardService], (service: ComicGuardService) => {
    expect(service).toBeTruthy();
  }));
});
