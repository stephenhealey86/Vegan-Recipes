/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LandingComponent } from './landing.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RecipesService } from 'src/app/services/recipes.service';
import { HttpClientModule } from '@angular/common/http';
import { ILogger } from 'src/app/models/ILogger';
import { Logger } from 'src/app/models/Logger';
import { DatePipe } from '@angular/common';

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent ],
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
    fixture = TestBed.createComponent(LandingComponent);
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
