import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { SpoonacularRecipeSearch } from '../../models/spoonacular-recipe-search';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  veganRecipes$: Observable<SpoonacularRecipeSearch>;
  private numberOfRecipes = 100;
  private showMoreRecipesSubject = new BehaviorSubject<number>(this.numberOfRecipes);
  private showMoreRecipesAction$ = this.showMoreRecipesSubject.asObservable();
  public hideShowMoreVisiblity = false;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.veganRecipes$ = combineLatest([
      this.recipeService.getVeganRecipes(),
      this.showMoreRecipesAction$
    ])
    .pipe(
      map(([recipes, num]) => {
        const recipesToReturn = {
          ...recipes
        };
        recipesToReturn.results = recipes.results.filter((val, i) => {
          return i < num;
        });
        return recipesToReturn;
      }),
      tap((res: SpoonacularRecipeSearch) => {
        if (res.results.length < 100) {
          this.hideShowMoreVisiblity = true;
        } else {
          this.hideShowMoreVisiblity = this.numberOfRecipes < 400 ? false : true;
        }
      })
    );
  }

  getMoreRecipes(): void {
    // this.recipeService.getMoreVeganRecipes();
    if (this.numberOfRecipes <= 300) {
      this.numberOfRecipes += 100;
      this.showMoreRecipesSubject.next(this.numberOfRecipes);
      if (this.numberOfRecipes >= 400) {
        this.hideShowMoreVisiblity = true;
      }
    }
  }
}
