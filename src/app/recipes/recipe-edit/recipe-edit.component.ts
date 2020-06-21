import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
 id: number;
 EditMode: boolean;
 recipeForm: FormGroup;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private recipeService: RecipeService) { }

    ngOnInit()
     {
        this.route.params.subscribe(
          (params:Params) =>{
          this.id = +params['id'];
          this.EditMode = params['id'] != null;
          console.log(this.EditMode);
          this.initForm();
          }
        );  
     }
     onCancel()
     {
       this.router.navigate(['../'],{relativeTo: this.route});
     }
     onSubmit(){
      // const newRecipe = new Recipe(
      //   this.recipeForm.value['name'],
      //   this.recipeForm.value['description'],
      //   this.recipeForm.value['imagePath'],
      //   this.recipeForm.value['ingredients']);
        if(this.EditMode)
        {
          this.recipeService.updateRecipe(this.id,this.recipeForm.value);
          this.router.navigate(['../'],{relativeTo: this.route});
        }
        else{
          this.recipeService.addRecipe(this.recipeForm.value);
        }
        
     }
    private initForm()
    {
      
      let recipeName='';
      let recipeDescription='';
      let recipeImg = '';
      let recipeIngredients = new FormArray([]);
      if(this.EditMode)
      {
        const recipe = this.recipeService.getRecipeS(this.id);
        recipeName = recipe.name;
        recipeDescription = recipe.description;
        recipeImg = recipe.imagePath;
        if(recipe['ingredients']){
          for(let ingredient of recipe.ingredients){
            recipeIngredients.push(
              new FormGroup({
                'name': new FormControl(ingredient.name,Validators.required),
                'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
              })
            );
          }
        }
      }
      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName,Validators.required),
        'imagePath': new FormControl(recipeImg,Validators.required),
        'description': new FormControl(recipeDescription,Validators.required),
        'ingredients' : recipeIngredients
      });
      console.log(this.recipeForm.get('ingredients').value);
    }
    onDeleteIngredient(index : number)
    {
      (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    } 
    onAddIngredient()
    {
      (<FormArray>this.recipeForm.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(null,Validators.required),
          'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
        })
      );
    }
   

}
