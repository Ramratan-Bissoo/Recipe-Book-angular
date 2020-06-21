import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
 recipe:Recipe;
 id:number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeS(this.id);
      }
    );
  }
  onAddToShoppingList(){
   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }
  onDeleteRecipe()
  {
    this.recipeService.deleteRecipe(this.id);
    
  }

}
