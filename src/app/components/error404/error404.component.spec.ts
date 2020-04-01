/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error404Component } from './error404.component';
import { DatePipe } from '@angular/common';
import { ILogger } from 'src/app/models/ILogger';
import { Logger } from 'src/app/models/Logger';
import { RecipesService } from 'src/app/services/recipes.service';
import { HttpClientModule } from '@angular/common/http';

describe('Error404Component', () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Error404Component ],
      imports: [
        HttpClientModule
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
    fixture = TestBed.createComponent(Error404Component);
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
