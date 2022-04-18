import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('collapse') collapseM : ElementRef = {} as ElementRef;
  isOpen : boolean = false;

  constructor(private rende : Renderer2) { }

  open(){
    if(this.isOpen == false){
      this.rende.addClass(this.collapseM.nativeElement,'show');
      this.isOpen = true;
    }else{
      this.rende.removeClass(this.collapseM.nativeElement,'show');
      this.isOpen = false;
    }
  }

  ngOnInit(): void {
  }

}
