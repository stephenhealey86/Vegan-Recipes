import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipeService.filterRecipeSearch('');
  }

}
