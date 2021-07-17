import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story/story.service';
import { StoriesId } from '../../types/Story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories: StoriesId = [];

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.storyService.getStories().subscribe((stories) => (this.stories = stories.splice(0,100)));
  }
}
