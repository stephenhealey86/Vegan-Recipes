/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GlobalErrorHandlerService } from './GlobalErrorHandler.service';

describe('Service: GlobalErrorHandler', () => {
  let service: GlobalErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalErrorHandlerService]
    });

    service = TestBed.get(GlobalErrorHandlerService);
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
});
