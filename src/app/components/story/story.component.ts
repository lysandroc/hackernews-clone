import { Component, Input, OnInit } from '@angular/core';
import { StoryService } from '../../services/story/story.service';
import { Story } from 'src/app/types/Story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  
  @Input() storyId: number = 0;
  @Input() rankId?: number;
  story?: Story;
  
  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
      this.storyService.getStory(this.storyId).subscribe((story) => {
        console.log({story})
        this.story = story
      });
  }
}