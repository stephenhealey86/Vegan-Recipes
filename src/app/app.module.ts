import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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

const JQuery: object = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    RecipesComponent,
    RecipeCardComponent,
    InstructionsComponent,
    IngredientComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  providers: [
    RecipesService,
    InstructionsGuardService,
    { provide: JQ_TOKEN, useValue: JQuery }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
