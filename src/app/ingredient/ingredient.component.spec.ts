/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngredientComponent } from './ingredient.component';
import { ExtendedIngredient } from 'src/app/instructions/spoonacular-instructions-result';

describe('IngredientComponent', () => {
  let component: IngredientComponent;
  let fixture: ComponentFixture<IngredientComponent>;

  const mockIngredient = {
    originalName: 'TestName',
    amount: 1,
    image: 'test.jpg'
  } as ExtendedIngredient;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientComponent);
    component = fixture.componentInstance;
    component.ingredient = mockIngredient;
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
