import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { SpoonacularRecipeSearch } from 'src/app/models/spoonacular-recipe-search';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  veganRecipes$: Observable<SpoonacularRecipeSearch>;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.veganRecipes$ = this.recipeService.getVeganRecipes();
  }
}
