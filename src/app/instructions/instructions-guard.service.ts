import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { RecipesService } from '../recipes/recipes.service';

@Injectable({
  providedIn: 'root'
})
export class InstructionsGuardService implements CanActivate {

constructor(private recipeSerive: RecipesService, private router: Router) { }

canActivate(route: ActivatedRouteSnapshot) {
  const id = 'id';
  const recipeExists = this.recipeSerive.validRecipeIDs.includes(route.params[id]);
  if (!recipeExists) {
    this.router.navigate(['/404']);
  }
  return recipeExists;
}

}
