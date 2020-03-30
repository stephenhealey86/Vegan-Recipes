import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  queryField: string;

  constructor(private recipeService: RecipesService, private router: Router) { }

  ngOnInit() { }

  public submit(): void {
    this.recipeService.filterRecipeSearch(this.queryField);
    if (!this.router.url.includes('recipes')) {
      this.router.navigateByUrl('/recipes');
    }
  }

  public clearSearchBar(): void {
    this.queryField = '';
  }

  public animate(event: MouseEvent): void {
    try {
      const LINK = event.srcElement as HTMLLinkElement;
      const ICON = LINK.children[0] as HTMLElement;
      ICON.animate([
        // keyframes
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' },
        { transform: 'rotate(0)' }
      ], {
        // timing options
        duration: 2000,
        iterations: 1
      });
          } catch (error) {
          console.log(error);
          }
        }

}
