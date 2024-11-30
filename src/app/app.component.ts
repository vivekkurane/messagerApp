import { Component, Input } from '@angular/core';
import { Post } from './posts/post-modal.resources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = []

  onPostAdded(post: Post) {
    this.storedPosts.push(post);
    console.log(this.storedPosts)
  }
}
