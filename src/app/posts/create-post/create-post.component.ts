import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Post } from "../post-modal.resources";

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
    enteredTitel = '';
    enteredContent = '';
    @Output() postCrated = new EventEmitter();

    constructor() {

    }

    ngOnInit(): void {
        
    }

    onAddPost() {
        const post: Post= {
            title: this.enteredTitel,
            content: this.enteredContent
        }
        this.postCrated.emit(post);
    }
}