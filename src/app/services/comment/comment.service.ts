import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../../types/Comment';
import { getCommentURL } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {}

  getComment(item:number): Observable<Comment> {
    const itemURL = getCommentURL(item);
    return this.http.get<Comment>(itemURL);
  }
}
