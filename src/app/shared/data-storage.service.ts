import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http:Http, 
              private recipeservice: RecipeService,
              private auth: AuthService) { }

  storeRecipe(){
    const token = this.auth.getToken();
    
    return this.http.put('https://ng-recipe-book-dc4c7.firebaseio.com/recipes.json?auth=' + token,this.recipeservice.getRecipe());
  }

  GetRecipe(){
    const token = this.auth.getToken();
    
    this.http.get('https://ng-recipe-book-dc4c7.firebaseio.com/recipes.json?auth=' + token).map( 
      (response :Response) =>{
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes){
          if(!recipe['ingredients']){
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
     ).subscribe(
      (recipes: Recipe[]) => {        
        this.recipeservice.setRecipe(recipes);
      },
      (error) => console.log(error)
    );
  }
 
}
