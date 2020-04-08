import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { SpoonacularRecipeSearch } from 'src/app/models/spoonacular-recipe-search';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private getDataEarly = this.recipeService.getVeganRecipes();

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.getDataEarly.subscribe();
    this.recipeService.filterRecipeSearch('');
  }

}
