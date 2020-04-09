import { Component, OnInit, Input } from '@angular/core';
import { SpoonacularRecipeResult } from '../recipes/spoonacular-recipe-result';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipeData: SpoonacularRecipeResult;
  @Input() baseUri: string;

  constructor() { }

  ngOnInit() {
  }

}
