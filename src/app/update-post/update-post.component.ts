import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  formUpdate: FormGroup;
  actualPost: any;
  postId: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router) {
    this.actualPost = {};
    this.formUpdate = new FormGroup({
      name: new FormControl(this.actualPost.name, [Validators.required]),
      description: new FormControl(this.actualPost.description, [Validators.required])
    })
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.postId = params.postId;
    });
    console.log(this.postId)
    this.actualPost = await this.postService.getOnlyPost(this.postId);
    console.log(this.actualPost);
  }

  async update() {
    const result = await this.postService.updatePost(this.postId, this.formUpdate.value);
    if (result['status'] == 200) {
      this.router.navigate(['/home']);
    }
  };

  async deletePost() {
    const result = await this.postService.deletePost(this.postId);
    if (result['status'] == 200) {
      this.router.navigate(['/home']);
    }
  }
}
