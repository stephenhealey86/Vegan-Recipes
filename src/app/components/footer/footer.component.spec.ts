/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
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

  it('should have link to spoonacular', () => {
    const link = fixture.debugElement.query(By.css('a')).nativeElement;

    expect(link.textContent).toEqual('Spoonacular API');
    expect(link.getAttribute('href')).toEqual('https://spoonacular.com/food-api');
    expect(link.getAttribute('target')).toEqual('_blank');
  });

  it('should have authors name', () => {
    expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toContain('Stephen Healey');
  });
});
