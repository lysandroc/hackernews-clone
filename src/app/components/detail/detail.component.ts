import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { StoryService } from 'src/app/services/story/story.service';
import { Story } from 'src/app/types/Story';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  story?: Story = undefined;

  constructor(
    private storyService: StoryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.loadStory(id);
    });
  }

  loadStory(storyId: number): void {
    this.storyService.getStory(storyId).subscribe((story) => {
      if(!story || !story.title) return;
      let urlDomain = '';
      if(story.url) {
        const { hostname } = new URL(story.url);
        urlDomain = hostname.replace('www.', '');
      }
      this.story = { ...story, urlDomain };
    });
  }
}
