import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { VeganBrandDirective } from './directives/veganBrand.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { Error404Component } from './components/error404/error404.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ErrorHandler } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { GlobalErrorHandlerService } from './services/GlobalErrorHandler.service';
import { DatePipe } from '@angular/common';
import { ILogger } from './models/ILogger';
import { Logger } from './models/Logger';
import { RecipesService } from './services/recipes.service';
import { InstructionsGuardService } from './guards/instructions-guard.service';
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
