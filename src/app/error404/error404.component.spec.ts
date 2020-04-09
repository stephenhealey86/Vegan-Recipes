/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error404Component } from './error404.component';
import { ILogger } from 'src/app/shared/ILogger.service';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('Error404Component', () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;
  let debug: DebugElement;
  const loggerMock = jasmine.createSpyObj(['logError']);
  const recipeServiceMock = jasmine.createSpyObj(['filterRecipeSearch']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error404Component ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ILogger, useValue: loggerMock },
        { provide: RecipesService, useValue: recipeServiceMock },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call filterRecipeSearch on Init', () => {
    expect(recipeServiceMock.filterRecipeSearch).toHaveBeenCalledWith('');
  });

  it('should have h3 title Vegan Recipes', () => {
    expect(debug.query(By.css('h3')).nativeElement.textContent).toEqual('Vegan Recipes');
  });

  it('should have p tag message', () => {
    expect(debug.query(By.css('p')).nativeElement.textContent).toEqual('404 error. Something went wrong.');
  });

  describe('a tag', () => {
    it('should have text Go To Recipes', () => {
      expect(debug.query(By.css('a')).nativeElement.textContent).toEqual('Go To Recipes');
    });

    it('should link to /recipes', () => {
      const href = debug.query(By.css('a')).nativeElement.getAttribute('href');
      expect(href).toEqual('/recipes');
    });
  });
});
