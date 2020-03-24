import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SpoonacularRecipeSearch } from '../models/spoonacular-recipe-search';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private baseUrl = environment.url;
  private dietUrl = 'recipes/search?diet=';
  private token = environment.token;

constructor(private http: HttpClient) { }

public getVeganRecipes(): Observable<SpoonacularRecipeSearch> {
  return this.http.get<SpoonacularRecipeSearch>(this.baseUrl + this.dietUrl + 'vegan&' + this.token);
}

}
