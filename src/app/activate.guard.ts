import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from './recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate,CanActivateChild {
  constructor(private recipe:RecipeService,
     private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.recipe.gepremission())
    {
    return true;
    }
      else{
        alert('you dont have premission');
        this.router.navigate(['/']);
      }
      
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.recipe.gepremission())
    {
    return true;
    }
      else{
        alert('you dont have premission');
        this.router.navigate(['/']);
      }
      
  }
  
}
