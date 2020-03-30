import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  recipeInstructions$ = this.route.paramMap
    .pipe(
      switchMap((p: Params) => this.recipeService.getRecipeInstructions(p.params.id))
    );

  constructor(private recipeService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit() {}

}
