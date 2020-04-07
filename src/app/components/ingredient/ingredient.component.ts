import { Component, OnInit, Input } from '@angular/core';
import { ExtendedIngredient } from '../../models/spoonacular-information-result';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  @Input() ingredient: ExtendedIngredient;

  constructor() { }

  ngOnInit() {
  }

}
