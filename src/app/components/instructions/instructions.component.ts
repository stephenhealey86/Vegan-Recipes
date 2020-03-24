import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }

}
