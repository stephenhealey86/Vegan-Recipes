import { NgModule } from '@angular/core';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { IngredientComponent } from '../instructions/ingredient/ingredient.component';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SpinnerComponent } from '../spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule,
    TooltipModule.forRoot()
  ],
  declarations: [
    RecipesRoutingModule.components,
    RecipeCardComponent,
    IngredientComponent,
    SpinnerComponent
  ]
})
export class RecipesModule { }
