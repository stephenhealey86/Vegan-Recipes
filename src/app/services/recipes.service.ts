import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, EMPTY, of } from 'rxjs';
import { SpoonacularRecipeSearch } from '../models/spoonacular-recipe-search';
import { SpoonacularInformationResult } from '../models/spoonacular-information-result';
import { tap, catchError, shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private baseUrl = environment.url;
  private dietUrl = 'recipes/search?diet=';
  private instructionsUrl = 'recipes/';
  private token = environment.token;
  private appStorageKey = 'VeganRecipes';
  private appsessionStorageKey = 'VeganRecipes';
  private recipeSearch$: Observable<SpoonacularRecipeSearch>;
  public get validRecipeIDs(): Array<string> {
    const json = sessionStorage.getItem(this.appsessionStorageKey);
    if (json) {
      return JSON.parse(json);
    }
    return [];
  }
  public get LocalStorage(): object {
    const json = localStorage.getItem(this.appStorageKey);
    if (json) {
      return JSON.parse(json);
    }
    return null;
  }

constructor(private http: HttpClient) { }

public getVeganRecipes(): Observable<SpoonacularRecipeSearch> {
  if (!this.recipeSearch$) {
    this.recipeSearch$ = this.http.get<SpoonacularRecipeSearch>(this.baseUrl + this.dietUrl + 'vegan&' + 'number=100&' + this.token)
    .pipe(
      tap((res: SpoonacularRecipeSearch) => {
      this.addRecipeIDsToService(res);
      console.log(res);
      return res;
    }),
    shareReplay(1),
    catchError(this.handleError)
    );
  }
  return this.recipeSearch$;
}

private addRecipeIDsToService(res: SpoonacularRecipeSearch): void {
  const SESSION_STORAGE = this.validRecipeIDs;
  res.results.forEach(x => {
    SESSION_STORAGE.push(x.id.toString());
  });
  const json = JSON.stringify(SESSION_STORAGE);
  sessionStorage.setItem(this.appsessionStorageKey, json);
}

public getRecipeInstructions(id: string): Observable<SpoonacularInformationResult> {
  const storedResult = this.getRecipeInstructionsFromLocalStorage(id);
  if (storedResult) {
    return of(storedResult);
  } else {
    return this.http.get<SpoonacularInformationResult>(this.baseUrl + this.instructionsUrl + id + '/information?' + this.token)
    .pipe(
      tap(res => {
        this.setRecipeInstructionsFromLocalStorage(res);
      }),
      catchError(this.handleError)
    );
  }
}

public getRecipeInstructionsFromLocalStorage(id: string): SpoonacularInformationResult {
  const LOCAL_STORAGE = this.LocalStorage;
  if (LOCAL_STORAGE) {
    return LOCAL_STORAGE[id] as SpoonacularInformationResult;
  }
  return null;
}

private setRecipeInstructionsFromLocalStorage(res: SpoonacularInformationResult): void {
  let storageToUpdate = this.LocalStorage;
  if (!storageToUpdate) {
    storageToUpdate = {};
  }
  storageToUpdate[res.id.toString()] = res;
  const json = JSON.stringify(storageToUpdate);
  localStorage.setItem(this.appStorageKey, json);
}

private handleError(err: any): Observable<never> {
  console.log(err);
  return EMPTY;
}

}
