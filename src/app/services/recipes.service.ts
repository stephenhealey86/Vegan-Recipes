import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SpoonacularRecipeSearch } from '../models/spoonacular-recipe-search';
import { SpoonacularInformationResult } from '../models/spoonacular-information-result';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private baseUrl = environment.url;
  private dietUrl = 'recipes/search?diet=';
  private instructionsUrl = 'recipes/';
  private token = environment.token;
  private appStorageKey = 'VeganRecipes';
  public validRecipeIDs = [] as Array<string>;
  public get LocalStorage(): object {
    const json = localStorage.getItem(this.appStorageKey);
    if (json) {
      return JSON.parse(json);
    }
    return null;
  }

constructor(private http: HttpClient) { }

public getVeganRecipes(): Observable<SpoonacularRecipeSearch> {
  return this.http.get<SpoonacularRecipeSearch>(this.baseUrl + this.dietUrl + 'vegan&' + this.token)
          .pipe<SpoonacularRecipeSearch>(map(res => {
            this.addRecipeIDsToService(res);
            return res;
          }));
}

private addRecipeIDsToService(res: SpoonacularRecipeSearch): void {
  this.validRecipeIDs = [] as Array<string>;
  res.results.forEach(x => {
    this.validRecipeIDs.push(x.id.toString());
  });
}

public getRecipeInstructions(id: string): Observable<SpoonacularInformationResult> {
    return this.http.get<SpoonacularInformationResult>(this.baseUrl + this.instructionsUrl + id + '/information?' + this.token);
  }

public getRecipeInstructionsFromLocalStorage(id: string): SpoonacularInformationResult {
  const LOCAL_STORAGE = this.LocalStorage;
  if (LOCAL_STORAGE) {
    return LOCAL_STORAGE[id] as SpoonacularInformationResult;
  }
  return null;
}

public setRecipeInstructionsFromLocalStorage(res: SpoonacularInformationResult): void {
  let storageToUpdate = this.LocalStorage;
  if (!storageToUpdate) {
    storageToUpdate = {};
  }
  storageToUpdate[res.id.toString()] = res;
  const json = JSON.stringify(storageToUpdate);
  localStorage.setItem(this.appStorageKey, json);
}

}
