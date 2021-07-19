import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoriesId, Story } from '../../types/Story';
import { getNewsURL, getStoryURL } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) {}

  getStories(): Observable<StoriesId> {
    const itemURL = getNewsURL();
    return this.http.get<StoriesId>(itemURL);
  }

  getStory(item:number): Observable<Story> {
    const itemURL = getStoryURL(item);
    return this.http.get<Story>(itemURL);
  }
}
