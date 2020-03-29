/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JqueryTokenService } from './jquery-token.service';

describe('Service: JqueryToken', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JqueryTokenService]
    });
  });

  it('should ...', inject([JqueryTokenService], (service: JqueryTokenService) => {
    expect(service).toBeTruthy();
  }));
});
