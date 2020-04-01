/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { VeganBrandDirective } from './veganBrand.directive';
import { Component } from '@angular/core';

@Component({
  template: '<a class="vegan-brand" appVeganBrand>Veg<i class="fas fa-globe-americas"></i>nRecipes</a>'
})
class TestComponent {

  constructor() { }

}

describe('Directive: VeganBrand', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    if (fixture.nativeElement && 'remove' in fixture.nativeElement) {
      (fixture.nativeElement as HTMLElement).remove();
    }
  });

  it('should create an instance', () => {
    expect(component).toBeDefined();
  });
});
