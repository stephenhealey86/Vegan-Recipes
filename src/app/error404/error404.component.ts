import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../core/services/recipes.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.filterRecipeSearch('');
  }

}
