import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  post :any = [];
  SPosts : any = [];
  constructor(private rout :ActivatedRoute,private postService :PostsService) { }

  ngOnInit(): void {
    this.rout.params.subscribe(res=>{
     this.postService.loadOnePost(res['id']).subscribe(response=>{
      this.post = response;
      this.loadSP(this.post.category.categoryId);
      console.log(this.post)
     })
    })
  }

  loadSP(categoryID : string){
    this.postService.loadSimilarPost(categoryID).subscribe(res=>{
      this.SPosts = res;
    })
  }

}
