import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { SpoonacularInformationResult } from 'src/app/models/spoonacular-information-result';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  recipeInstructions$: Observable<SpoonacularInformationResult>;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRecipeInstructions(this.getRecipeId());
  }

  private getRecipeInstructions(id: string): void {
    const storedResult = this.recipeService.getRecipeInstructionsFromLocalStorage(id);
    if (storedResult) {
      this.recipeInstructions$ = of(storedResult);
    } else {
      this.recipeInstructions$ = this.recipeService.getRecipeInstructions(id);
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
