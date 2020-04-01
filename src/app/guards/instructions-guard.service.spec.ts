/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstructionsGuardService } from './instructions-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ILogger } from '../models/ILogger';
import { Logger } from '../models/Logger';
import { RecipesService } from '../services/recipes.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('Service: InstructionsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        DatePipe,
        { provide: ILogger, useClass: Logger },
        RecipesService,
        InstructionsGuardService
      ]
    });
  });

  it('should ...', inject([InstructionsGuardService], (service: InstructionsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
