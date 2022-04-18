import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {
  posts :any = [];

  constructor(private postService :PostsService,private rout : ActivatedRoute) { }
  category = '';

  ngOnInit(): void {
    this.rout.params.subscribe(res=>{
      this.postService.loadCategoryPosts(res['id']).subscribe(response=>{
        this.posts = response;
      });
      this.category = res['category']
    })

  }

}
