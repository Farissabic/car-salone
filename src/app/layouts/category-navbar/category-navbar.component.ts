import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  categories : any = [];
  @ViewChild('cars') carsManu: ElementRef =  {} as ElementRef;
  isOpen :boolean = false;

  constructor(private categoriesService :CategoriesService, private reder : Renderer2) { }

  open(){
    if(this.isOpen == false){
      this.reder.setStyle(this.carsManu.nativeElement,'height',`25rem`);
      this.isOpen = true;
    }else{
      this.reder.setStyle(this.carsManu.nativeElement,'height',`5rem`);
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
    this.categoriesService.loadCategories().subscribe(res=>{
      this.categories=res;
      console.log(this.categories);
    })
  }

}
