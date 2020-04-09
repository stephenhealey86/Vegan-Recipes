/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipesService } from './recipes.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DatePipe } from '@angular/common';
import { ILogger } from './ILogger.service';
import { SpoonacularInformationResult } from '../instructions/spoonacular-instructions-result';
import { environment } from 'src/environments/environment';
import { SpoonacularRecipeSearch } from '../recipes/spoonacular-recipe-search';
import { Observable, BehaviorSubject, of } from 'rxjs';

describe('Service: Recipes', () => {
  let service: RecipesService;
  let httpMock: HttpTestingController;
  const loggerMock = jasmine.createSpyObj(['logDebug', 'logInfo', 'Logwarning', 'logError']);

  const baseUrl = environment.url;
  const dietUrl = 'recipes/search?diet=';
  const instructionsUrl = 'recipes/';
  const token = environment.token;
  const appStorageKey = 'VeganRecipes';
  const appsessionStorageKey = 'VeganRecipes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ILogger, useValue: loggerMock },
        RecipesService
      ]
    });

    service = TestBed.get(RecipesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('combineFilterAndSearch', () => {
    const PRIVATE_METHOD = 'combineFilterAndSearch';
    const PRIVATE_VAR_RECIPE_SEARCH_OB = 'recipeSearch$';
    const PRIVATE_VAR_SEARCH_STREAM = 'searchStream$';
    let combinedStream$: Observable<SpoonacularRecipeSearch>;
    let searchStream$: BehaviorSubject<string>;
    let testObj: SpoonacularRecipeSearch;

    beforeEach(() => {
      testObj = {
        baseUri: 'Testing',
        number: 20,
        results: [ { id: 1, title: 'Testing One' }, { id: 1, title: 'Testing Two' } ]
      } as SpoonacularRecipeSearch;
      service[PRIVATE_VAR_RECIPE_SEARCH_OB] = of(testObj);
      combinedStream$ = service[PRIVATE_METHOD]();
      searchStream$ = service[PRIVATE_VAR_SEARCH_STREAM];
    });

    it('should return all SpoonacularRecipeSearch results', () => {
      const recipeSearch = service[PRIVATE_METHOD]();

      recipeSearch.subscribe((res) => {
        expect(res).toEqual(testObj);
      });

      searchStream$.next('Test');
    });

    it('should return filtered SpoonacularRecipeSearch results', () => {
      const recipeSearch = service[PRIVATE_METHOD]();
      const filteredObj = { ...testObj } as SpoonacularRecipeSearch;
      filteredObj.results.pop();

      recipeSearch.subscribe((res) => {
        expect(res).toEqual(filteredObj);
      });

      searchStream$.next('One');
    });
  });

  describe('getNextRecipesObservable', () => {
    const PRIVATE_METHOD = 'getNextRecipesObservable';

    it('should return Observable<SpoonacularRecipeSearch> from http', () => {
      const spy = spyOn<any>(service, 'addRecipeIDsToService');
      const recipeSearch = {
        baseUri: 'http://testing.com',
        number: 10
      } as SpoonacularRecipeSearch;
      const num = 100;
      const offset = 0;

      service[PRIVATE_METHOD](num, offset).subscribe((res) => {
        expect(res).toEqual(recipeSearch);
        expect(spy).toHaveBeenCalledTimes(1);
      });

      const req = httpMock.expectOne(`${baseUrl + dietUrl}vegan&offset=${offset}&number=${num}&${token}`);
      expect(req.request.method).toBe('GET');
      req.flush(recipeSearch);
    });

    it('should return error and call handleError', () => {
      const spyService = spyOn<any>(service, 'addRecipeIDsToService');
      const num = 100;
      const offset = 0;
      let error;

      service[PRIVATE_METHOD](num, offset).subscribe(() => {
        // Shouldn't happen
        expect(false).toBe(true);
      }, err => {
        error = err;
        expect(err).toBeTruthy();
      }, () => {
        expect(spyService).toHaveBeenCalledTimes(0);
        expect(loggerMock.logError).toHaveBeenCalledTimes(1);
        expect(loggerMock.logError).toHaveBeenCalledWith(error);
      });

      const req = httpMock.expectOne(`${baseUrl + dietUrl}vegan&offset=${offset}&number=${num}&${token}`);
      expect(req.request.method).toBe('GET');
      req.error(new ErrorEvent('Testing'));
    });
  });

  describe('filterRecipeSearch', () => {
    const PRIVATE_METHOD = 'filterRecipeSearch';

    it('should raise next obseravable event', () => {
      const testString = 'Testing';
      const PRIVATE_VAR = 'searchAction$';
      const ob = service[PRIVATE_VAR];

      service[PRIVATE_METHOD](testString);

      ob.subscribe((res) => {
        expect(res).toEqual(testString);
      });

    });
  });

  describe('addRecipeIDsToService', () => {
    const PRIVATE_METHOD = 'addRecipeIDsToService';

    beforeEach(() => {
      sessionStorage.clear();
    });

    it('should add recipe ID to local storage', () => {
      const recipe = {
        results: [{ id: 1 }, { id: 2 }]
      } as SpoonacularRecipeSearch;

      service[PRIVATE_METHOD](recipe);

      expect(JSON.parse(sessionStorage[appsessionStorageKey])).toEqual(['1', '2']);
    });
  });

  describe('getRecipeInstructions', () => {
    let spyGet: jasmine.Spy;
    let spySet: jasmine.Spy;

    it('should return Observable<SpoonacularInformationResult> from http', () => {
      // Arrange
      spyGet = spyOn<any>(service, 'getRecipeInstructionsFromLocalStorage');
      spySet = spyOn<any>(service, 'setRecipeInstructionsFromLocalStorage');
      const id = 1;
      const instructions = {
        id,
        vegan: true
      } as SpoonacularInformationResult;

      // Act & Assert
      service.getRecipeInstructions(id.toString())
        .subscribe(((res: SpoonacularInformationResult) => {
          expect(res.vegan).toBeTruthy();
          expect(res).toEqual(instructions);
          expect(spyGet).toHaveBeenCalledTimes(1);
          expect(spySet).toHaveBeenCalledTimes(1);
        }));

      const req = httpMock.expectOne(`${baseUrl + instructionsUrl + id}/information?${token}`);
      expect(req.request.method).toBe('GET');
      req.flush(instructions);
    });

    it('should return Observable<SpoonacularInformationResult> from localstorage', () => {
      // Arrange
      localStorage.clear();
      const id = 1;
      const instructions = {
        id,
        vegan: true
      } as SpoonacularInformationResult;
      const PRIVATE_METHOD = 'setRecipeInstructionsFromLocalStorage';
      service[PRIVATE_METHOD](instructions);
      spySet = spyOn<any>(service, 'setRecipeInstructionsFromLocalStorage');
      spyGet = spyOn<any>(service, 'getRecipeInstructionsFromLocalStorage').and.returnValue(instructions);

      // Act & Assert
      service.getRecipeInstructions(id.toString())
        .subscribe(((res: SpoonacularInformationResult) => {
          expect(res.vegan).toBeTruthy();
          expect(res).toEqual(instructions);
          expect(spySet).toHaveBeenCalledTimes(0);
          expect(spyGet).toHaveBeenCalledTimes(1);
        }));

      httpMock.expectNone(`${baseUrl + instructionsUrl + id}/information?${token}`);
    });
  });

  describe('storing SpoonacularInformationResult in localStorage', () => {
    const PRIVATE_GET_METHOD = 'getRecipeInstructionsFromLocalStorage';
    const PRIVATE_SET_METHOD = 'setRecipeInstructionsFromLocalStorage';

    it('should get same object back', () => {
      localStorage.clear();
      const testObj = {
        aggregateLikes: 2,
        id: 1,
        dairyFree: true
      } as SpoonacularInformationResult;

      service[PRIVATE_SET_METHOD](testObj);

      expect(service[PRIVATE_GET_METHOD](testObj.id.toString())).toEqual(testObj);
    });
  });

  describe('handleError', () => {

    it('should call logger.LogError method', () => {
      const PRIVATE_METHOD = 'handleError';
      service[PRIVATE_METHOD]('Error');

      expect(loggerMock.logError).toHaveBeenCalledTimes(1);
      expect(loggerMock.logError).toHaveBeenCalledWith('Error');
    });
  });
});
