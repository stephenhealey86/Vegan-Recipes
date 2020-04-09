import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ExtendedIngredient } from '../spoonacular-instructions-result';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class IngredientComponent implements OnInit {

  @Input() ingredient: ExtendedIngredient;

  constructor() { }

  ngOnInit() {
  }

}
