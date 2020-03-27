import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { InstructionsGuardService } from './guards/instructions-guard.service';
import { Error404Component } from './components/error404/error404.component';


const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'instructions/:id', component: InstructionsComponent, canActivate: [InstructionsGuardService] },
  { path: '404', component: Error404Component },
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
