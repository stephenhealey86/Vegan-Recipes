import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { SpoonacularRecipeSearch } from 'src/app/models/spoonacular-recipe-search';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  veganRecipes: SpoonacularRecipeSearch;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.getVeganRecipes()
      .subscribe((res: SpoonacularRecipeSearch) => {
        this.veganRecipes = res;
      }, err => {
        console.log(err);
      });
  }
}
