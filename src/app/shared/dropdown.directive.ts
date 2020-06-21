import { Directive, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
    
    @Input('sele') test:Boolean; 
    @HostBinding('class.open')isOpen = false;
   @HostListener('click') toggelOpen()
   {
      this.isOpen = !this.isOpen;
   }
   @HostListener('mouseover') onHover() {
       
    if(this.test){
        window.alert("hover");
       }
      
    
  }
  @HostListener('mouseout') onMouseOut() {
    if(this.test){
        window.alert("out");
       }
  }
}