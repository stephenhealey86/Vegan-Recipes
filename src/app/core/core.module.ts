import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GlobalErrorHandlerService } from './GlobalErrorHandler.service';
import { ILogger } from './ILogger.service';
import { Logger } from './Logger.service';
import { InstructionsGuardService } from '../instructions/instructions-guard.service';
import { JQ_TOKEN } from './jquery-token.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RecipesService } from './recipes.service';

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
