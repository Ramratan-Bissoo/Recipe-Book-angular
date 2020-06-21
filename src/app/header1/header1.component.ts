import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  checkLogin:boolean;
  constructor(private dataStorage:DataStorageService,
              public authservice:AuthService) { }
 
  ngOnInit() {
    
  }
  logout()
  {
    this.authservice.signOut();
  }
  onSaveRecipe(){
   this.dataStorage.storeRecipe().subscribe(
     (response :Response)=> {
       console.log(response)
      },
     (error) => console.log(error)
   );
  }
  onGetRecipe(){
   this.dataStorage.GetRecipe();
  }

}
