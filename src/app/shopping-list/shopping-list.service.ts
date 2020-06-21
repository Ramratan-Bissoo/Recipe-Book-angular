import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.module'

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  
  data1:string;
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index : number) {
    return this.ingredients[index];
  }
  setSelectValue(name:string)
  {
    
    this.data1=name;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  upDateIngredients(index:number,newIngredient:Ingredient)
  {
    this.ingredients[index] = newIngredient;
     this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index:number)
  {
    this.ingredients.splice(index,1)
     this.ingredientsChanged.next(this.ingredients.slice());
  }
}
