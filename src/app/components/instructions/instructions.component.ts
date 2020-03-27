import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { SpoonacularInformationResult } from 'src/app/models/spoonacular-information-result';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  recipeInstructions: SpoonacularInformationResult;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRecipeInstructions(this.getRecipeId());
  }

  private getRecipeInstructions(id: string): void {
    const storedResult = this.recipeService.getRecipeInstructionsFromLocalStorage(id);
    if (storedResult) {
      this.recipeInstructions = storedResult;
    } else {
      this.recipeService.getRecipeInstructions(id)
      .subscribe(res => {
        this.recipeService.setRecipeInstructionsFromLocalStorage(res);
        this.recipeInstructions = res;
      }, err => {
        console.log(err);
      });
    }
  }

  private getRecipeId(): string {
    let id: string;
    this.route.paramMap
      .subscribe(p => {
        id = p.get('id');
      });
    return id;
  }

}
