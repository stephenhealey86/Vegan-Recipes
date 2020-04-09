import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesService } from './recipes/recipes.service';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { IngredientComponent } from './ingredient/ingredient.component';
import { InstructionsGuardService } from './instructions/instructions-guard.service';
import { Error404Component } from './error404/error404.component';
import { JQ_TOKEN } from './shared/jquery-token.service';
import { ILogger } from './shared/ILogger.service';
import { Logger } from './shared/Logger.service';
import { DatePipe } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
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
    RecipesComponent,
    RecipeCardComponent,
    InstructionsComponent,
    IngredientComponent,
    Error404Component,
    SpinnerComponent,
    SwapImageOnHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TooltipModule.forRoot()
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
