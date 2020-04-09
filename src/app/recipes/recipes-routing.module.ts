import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { InstructionsComponent } from '../instructions/instructions.component';
import { InstructionsGuardService } from '../instructions/instructions-guard.service';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: ':id', component: InstructionsComponent, canActivate: [InstructionsGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {
  static components = [ RecipesComponent, InstructionsComponent ];
}
