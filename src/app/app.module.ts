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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    RecipesComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
