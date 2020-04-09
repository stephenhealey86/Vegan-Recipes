import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';

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
