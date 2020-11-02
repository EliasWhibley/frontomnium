import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPosts: any;
  constructor(private PostService: PostService) { }


  async ngOnInit() {
    this.allPosts = await this.PostService.getPosts();
  }

}
