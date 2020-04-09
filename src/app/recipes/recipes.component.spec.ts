/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ILogger } from 'src/app/shared/ILogger.service';
import { Logger } from 'src/app/shared/Logger.service';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RecipesComponent,
        RecipeCardComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        DatePipe,
        { provide: ILogger, useClass: Logger },
        RecipesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
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
