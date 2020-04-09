import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  queryField = '';

  constructor(private recipeService: RecipesService, private router: Router) { }

  ngOnInit() { }

  public submit(): void {
    this.recipeService.filterRecipeSearch(this.queryField);
    if (!this.router.url.includes('recipes')) {
      this.router.navigateByUrl('/recipes');
    }
  }

  public clearSearchBar(): void {
    this.queryField = '';
  }
}
