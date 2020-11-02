import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  formPost: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router) {
    this.formPost = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {

  }

  async newPost() {
    const result = await this.postService.addPost(this.formPost.value);
    if (result['status'] == 200) {
      this.router.navigate(['/home']);
    }
  };


}
