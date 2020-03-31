import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, EMPTY, of, BehaviorSubject, combineLatest, from, } from 'rxjs';
import { SpoonacularRecipeSearch } from '../models/spoonacular-recipe-search';
import { SpoonacularInformationResult } from '../models/spoonacular-information-result';
import { tap, catchError, shareReplay, map, mergeMap, concatMap, toArray } from 'rxjs/operators';
import { ILogger } from '../models/ILogger';


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
  private searchStream$ = new BehaviorSubject<string>('');
  private searchAction$ = this.searchStream$.asObservable();

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

constructor(private http: HttpClient, private logger: ILogger) { }


public getVeganRecipes(): Observable<SpoonacularRecipeSearch> {
  if (!this.recipeSearch$) {
    sessionStorage.clear();
    this.recipeSearch$ = combineLatest<Array<SpoonacularRecipeSearch>>([
      this.getNextRecipesObservable(100, 0),
      this.getNextRecipesObservable(100, 100),
      this.getNextRecipesObservable(100, 200),
      this.getNextRecipesObservable(100, 300)
    ])
      .pipe(
        map(([one, two, three, four]) => {
          three.results.push(...four.results);
          two.results.push(...three.results);
          one.results.push(...two.results);
          return one;
        }),
        shareReplay(1),
      );
  }
  return this.combineFilterAndSearch();
}

private combineFilterAndSearch(): Observable<SpoonacularRecipeSearch> {
  const combinedStream$ = combineLatest<Observable<SpoonacularRecipeSearch>, Observable<string>>([
    this.recipeSearch$,
    this.searchAction$
  ])
  .pipe(
    map(([recipes, str]) => {
      const recipesToReturn = {
        ...recipes
      };
      if (str.length > 0) {
        recipesToReturn.results = recipes.results.filter(res => {
            return res.title.toLowerCase().includes(str.toLowerCase());
          });
      }
      return recipesToReturn;
    })
  );
  return combinedStream$;
}

private getNextRecipesObservable(num: number, offest: number): Observable<SpoonacularRecipeSearch> {
  return this.http.get<SpoonacularRecipeSearch>(this.baseUrl + this.dietUrl + 'vegan&' + `offset=${offest}&` +
                                                `number=${num}&` + this.token)
    .pipe(
      tap((res: SpoonacularRecipeSearch) => {
      this.addRecipeIDsToService(res);
      return res;
    }),
    catchError(this.handleError)
    );
}

public filterRecipeSearch(str: string): void {
  this.searchStream$.next(str);
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
  this.logger.logError(err);
  return EMPTY;
}

}
