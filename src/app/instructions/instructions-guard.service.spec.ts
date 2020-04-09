/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InstructionsGuardService } from './instructions-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ILogger } from '../core/ILogger.service';
import { Logger } from '../core/Logger.service';
import { RecipesService } from '../core/recipes.service';
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
