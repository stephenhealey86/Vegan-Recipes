/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipesService } from './recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ILogger } from '../models/ILogger';
import { Logger } from '../models/Logger';

describe('Service: Recipes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        DatePipe,
        { provide: ILogger, useClass: Logger },
        RecipesService
      ]
    });
  });

  it('should ...', inject([RecipesService], (service: RecipesService) => {
    expect(service).toBeTruthy();
  }));
});
