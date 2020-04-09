/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RecipesService } from 'src/app/core/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mock',
  template: '<div></div>'
})
class MockComponent {

}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const mockRecipeService = jasmine.createSpyObj(['filterRecipeSearch']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        MockComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([{ path: 'recipes', component: MockComponent}]),
        HttpClientModule
      ],
      providers: [
        { provide: RecipesService, useValue: mockRecipeService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
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

  describe('brand logo', () => {
    it('should have link to landing page', () => {
      const link = fixture.debugElement.query(By.css('a')).nativeElement;

      expect(link.getAttribute('href')).toEqual('/landing');
    });
  });

  describe('button', () => {
    it('should have text = Search', () => {
      const btn = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(btn.textContent).toEqual('Search');
    });

    it('should have type = submit', () => {
      const btn = fixture.debugElement.query(By.css('button')).nativeElement;

      expect(btn.getAttribute('type')).toEqual('submit');
    });
  });

  describe('input', () => {
    it('should bind to queryField', () => {
      const input = fixture.debugElement.query(By.css('input')).nativeElement;
      const testValue = 'testing';

      fixture.whenStable().finally(() => {
        input.value = testValue;
        input.dispatchEvent(new Event('input'));

        expect(component.queryField).toEqual(testValue);
      });
      expect(input).toBeTruthy();
    });
  });

  describe('form', () => {
    it('should call submit on submit', () => {
      const form = fixture.debugElement.query(By.css('form'));
      const spy = spyOn(component, 'submit');

      form.triggerEventHandler('submit', null);

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should call recipeService.filterRecipeSearch() on submit', () => {
      const form = fixture.debugElement.query(By.css('form'));
      const testValue = 'testing';
      component.queryField = testValue;

      form.triggerEventHandler('submit', null);

      expect(mockRecipeService.filterRecipeSearch).toHaveBeenCalledWith(testValue);
    });

    it('should call router.navigateByUrl', () => {
      const form = fixture.debugElement.query(By.css('form'));
      const router = TestBed.get(Router);
      const spy = spyOn(router, 'navigateByUrl');

      form.triggerEventHandler('submit', null);

      expect(spy).toHaveBeenCalledWith('/recipes');
    });
  });
});
