import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GlobalErrorHandlerService } from './services/GlobalErrorHandler.service';
import { ILogger } from './services/ILogger.service';
import { Logger } from './services/Logger.service';
import { InstructionsGuardService } from '../instructions/instructions-guard.service';
import { JQ_TOKEN } from './services/jquery-token.service';
import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from './services/recipes.service';

const JQuery: object = window['$'];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    },
    DatePipe,
    { provide: ILogger, useClass: Logger },
    RecipesService,
    InstructionsGuardService,
    { provide: JQ_TOKEN, useValue: JQuery }
  ]
})
export class CoreModule { }
