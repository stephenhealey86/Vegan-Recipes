/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecipeCardComponent } from './recipe-card.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SpoonacularRecipeResult } from 'src/app/recipes/spoonacular-recipe-result';

describe('RecipeCardComponent', () => {
  let component: RecipeCardComponent;
  let fixture: ComponentFixture<RecipeCardComponent>;
  const baseUri = 'testUri';
  const recipeData = {
    image: 'test.jpg',
    title: 'TestTitle',
    readyInMinutes: 5,
    servings: 2
  } as SpoonacularRecipeResult;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeCardComponent ],
      imports: [
        RouterTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardComponent);
    component = fixture.componentInstance;
    component.baseUri = baseUri;
    component.recipeData = recipeData;
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
});
