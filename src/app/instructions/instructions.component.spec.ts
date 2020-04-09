/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InstructionsComponent } from './instructions.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';
import { ILogger } from 'src/app/core/ILogger.service';
import { Logger } from 'src/app/core/Logger.service';
import { RecipesService } from 'src/app/core/recipes.service';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';

describe('InstructionsComponent', () => {
  let component: InstructionsComponent;
  let fixture: ComponentFixture<InstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InstructionsComponent,
        IngredientComponent,
        SpinnerComponent
       ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        TooltipModule.forRoot()
      ],
      providers: [
        DatePipe,
        { provide: ILogger, useClass: Logger },
        RecipesService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsComponent);
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
