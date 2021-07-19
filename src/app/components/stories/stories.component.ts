import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story/story.service';
import { Story } from '../../types/Story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  stories: Story[] = [];

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    this.storyService.getStories().subscribe((storiesId) => {
      const topStories = storiesId.splice(0,10); 
      this.loadStories(topStories);
    })
  }

  loadStories(topStories: number[]): void {
    topStories.forEach(storyId => {
      this.storyService.getStory(storyId).subscribe((story) => {
        if(!story || !story.title) return;
        let urlDomain = '';
        if(story.url) {
          const { hostname } = new URL(story.url);
          urlDomain = hostname.replace('www.', '');
        }
        this.stories.push({ ...story, urlDomain });
      });
    });
  }

  hideStory(storyId: number): void {
    this.stories = this.stories.filter(story => story.id !== storyId)
  }
}
