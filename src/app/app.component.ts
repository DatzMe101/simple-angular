import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService, IPost } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'simple-angular';
  form = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });
  posts = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.get<IPost[]>().subscribe((data) => {
      this.posts = data;
    });
  }

  submitForm() {
    const { title, body } = this.form.value;
    const post: IPost = {
      userId: 1,
      title,
      body,
    };
    this.postService.post<IPost>(post).subscribe((data) => {
      this.posts = [data, ...this.posts];
      this.form.reset();
    });
  }
}
