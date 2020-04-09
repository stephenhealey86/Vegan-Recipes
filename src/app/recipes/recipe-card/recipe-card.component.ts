import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SpoonacularRecipeResult } from '../spoonacular-recipe-result';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeCardComponent implements OnInit {

  @Input() recipeData: SpoonacularRecipeResult;
  @Input() baseUri: string;

  constructor() { }

  ngOnInit() {
  }

}
