import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[]=[
    new Recipe('pizza',
    'Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə])',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
    [ new Ingredient('chess',2),
    new Ingredient('sweetCon',12)
    ]),
    new Recipe('Burger recipe',
    'The Best Burger Recipe!',
    'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/05/veg-burger-recipe.jpg',
    [ new Ingredient('chess',2),
    new Ingredient('sweetCon',12)
    ])
    
  ];
  constructor(private shoppingList:ShoppingListService) { }
  setRecipe( recipes: Recipe[])
  {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipe()
  {
    return this.recipes.slice();
  }
  getRecipeS(index: number)
  {
     return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingList.addIngredients(ingredients);
  }
  //this fuction use to pass premission for Auth Gurd 
  gepremission():boolean{
    return true;
  }
  addRecipe(recipe: Recipe)
  {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number,newRecipe: Recipe)
  {
    this.recipes[index]= newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number)
  {
    this.recipes.splice(index,1)
    this.recipeChanged.next(this.recipes.slice());
  }
}
