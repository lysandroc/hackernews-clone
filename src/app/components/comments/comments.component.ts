import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';
import { Comment } from '../../types/Comment';
import { StoriesId } from '../../types/Story';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() commentsId: StoriesId = [];
  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    for (const commentId of this.commentsId) {
      this.commentService.getComment(commentId).subscribe((comment) => {
        this.comments.push(comment)
      });
    } 
  }
}
