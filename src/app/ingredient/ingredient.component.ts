import { Component, OnInit, Input } from '@angular/core';
import { ExtendedIngredient } from '../instructions/spoonacular-instructions-result';

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
