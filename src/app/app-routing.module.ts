import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ActivateGuard } from './activate.guard';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import { AuthGuard } from './auth/auth-guard.service';



const routes: Routes = [
  {
    path:'', redirectTo:'/recipe', pathMatch:'full'
  },
  {
  path:'recipe', component:RecipesComponent, children: [
    {  path: '' , component:RecipeStartComponent },
     { path:'new', component:RecipeEditComponent, canActivate: [AuthGuard]},
    {  path: ':id' , component:RecipesDetailComponent },
    { path:':id/edit', component:RecipeEditComponent, canActivate: [AuthGuard]}
   ]  },
  {
    path:'shopping', component:ShoppingListComponent
  },  
  {
    path:'SignUp', component:SignupComponent
  },
  {
    path:'SignIn', component:SigninComponent
  },
  {
    path:'Not-Found', component:PagenotfoundComponent
  },
  {
    path:'**', redirectTo: '/Not-Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
