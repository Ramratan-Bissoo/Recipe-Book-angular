import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.module'
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  // selected1 = '';
  // selected2 = 'Tomatoes';

  constructor(private slService: ShoppingListService) {
    // this.selected1 = this.slService.data1;
  }

  ngOnInit() {
    
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  //test test for me use dropdwon value save in server
  // selectValue()
  // {
  //   console.log(this.selected1);
  //   this.slService.setSelectValue(this.selected1);
  // }
  onEditItem(index : number)
  {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
