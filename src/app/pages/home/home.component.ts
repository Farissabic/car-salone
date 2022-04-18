import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  postsN : any =[];
  postsA : any =[];
  constructor(private postsService :PostsService) { }

  ngOnInit(): void {
   this.postsService.loadNewerPosts().subscribe(res=>{
    this.postsN = res;
   });

   this.postsService.loadArrivingPosts().subscribe(res=>{
     this.postsA = res;
   })
    
  }

}
