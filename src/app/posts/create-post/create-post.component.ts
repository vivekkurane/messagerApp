import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Post } from "../post-modal.resources";
import { NgForm } from "@angular/forms";
import { PostService } from "../services/post.service";

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

    constructor(private postService: PostService) {

    }

    ngOnInit(): void {
        
    }

    onAddPost(form: NgForm) {
        const post: Post = {title: form.value.postTitle, content: form.value.postContent}
        if(form.invalid) {
            return
        }
        this.postService.setPosts(post)
        form.resetForm();
    }
}