import { Component, OnInit} from "@angular/core";
import { Post } from "../post-modal.resources";
import { PostService } from "../services/post.service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
    posts: Post[] = [];

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.posts = this.postService.getPosts();
        this.postService.getUpdatedPost().subscribe(data => {
            this.posts = data;
        })
    }
}