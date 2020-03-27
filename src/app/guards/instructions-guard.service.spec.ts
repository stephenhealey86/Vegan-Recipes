/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstructionsGuardService } from './instructions-guard.service';

describe('Service: InstructionsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructionsGuardService]
    });
  });

  it('should ...', inject([InstructionsGuardService], (service: InstructionsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
