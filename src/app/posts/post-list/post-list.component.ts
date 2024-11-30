import { Component, Input } from "@angular/core";
import { Post } from "../post-modal.resources";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
    @Input() posts!: Post[];

    constructor() {}
}