import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { VeganBrandDirective } from './shared/veganBrand.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { Error404Component } from './error404/error404.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorHandler } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GlobalErrorHandlerService } from './core/GlobalErrorHandler.service';
import { DatePipe } from '@angular/common';
import { ILogger } from './core/ILogger.service';
import { Logger } from './core/Logger.service';
import { RecipesService } from './core/recipes.service';
import { InstructionsGuardService } from './instructions/instructions-guard.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        TooltipModule.forRoot(),
        HttpClientModule
      ],
      declarations: [
        VeganBrandDirective,
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LandingComponent,
        RecipesComponent,
        RecipeCardComponent,
        InstructionsComponent,
        IngredientComponent,
        Error404Component,
        SpinnerComponent
      ],
      providers: [
        {
          provide: ErrorHandler,
          useClass: GlobalErrorHandlerService
        },
        DatePipe,
        { provide: ILogger, useClass: Logger },
        RecipesService,
        InstructionsGuardService,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
