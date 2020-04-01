import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesService } from './services/recipes.service';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { InstructionsGuardService } from './guards/instructions-guard.service';
import { Error404Component } from './components/error404/error404.component';
import { JQ_TOKEN } from './services/jquery-token.service';
import { ILogger } from './models/ILogger';
import { Logger } from './models/Logger';
import { DatePipe } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { GlobalErrorHandlerService } from './services/GlobalErrorHandler.service';
import { VeganBrandDirective } from './directives/veganBrand.directive';

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
    SpinnerComponent
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
