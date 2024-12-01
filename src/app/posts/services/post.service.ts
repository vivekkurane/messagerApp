import { Injectable } from "@angular/core";
import { Post } from "../post-modal.resources";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class PostService {
    posts: Post[] = []
    updatedPost = new Subject<Post[]>();
    
    getPosts() {
        return [...this.posts];
    }

    getUpdatedPost() {
        return this.updatedPost.asObservable();
    }
    setPosts(post: Post) {
        this.posts.push(post);
        this.updatedPost.next([...this.posts])
    }
}