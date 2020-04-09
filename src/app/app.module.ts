import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { RecipesService } from './recipes/recipes.service';
import { InstructionsGuardService } from './instructions/instructions-guard.service';
import { Error404Component } from './error404/error404.component';
import { JQ_TOKEN } from './shared/jquery-token.service';
import { ILogger } from './shared/ILogger.service';
import { Logger } from './shared/Logger.service';
import { DatePipe } from '@angular/common';
import { GlobalErrorHandlerService } from './shared/GlobalErrorHandler.service';
import { VeganBrandDirective } from './shared/veganBrand.directive';
import { SwapImageOnHoverDirective } from './shared/swap-image-onHover.directive';

const JQuery: object = window['$'];

@NgModule({
  declarations: [
    VeganBrandDirective,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    Error404Component,
    SwapImageOnHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
