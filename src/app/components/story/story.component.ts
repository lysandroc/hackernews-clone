import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StoryService } from '../../services/story/story.service';
import { Story } from 'src/app/types/Story';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Output() onHideStory: EventEmitter<number> = new EventEmitter();

  @Output() btnClick = new EventEmitter();
  @Input() storyId: number = 0;
  @Input() rankId: number = 0;
  story?: Story;
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  
  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
      this.storyService.getStory(this.storyId).subscribe((story) => {
        console.log({ story })
        if(!story.title) return;
        let urlDomain = '';

        if(story.url) {
          const { hostname } = new URL(story.url);
          urlDomain = hostname.replace('www.', '');
        }
        this.story = { ...story, urlDomain };
      });
  }

  hideStory(): void {
    this.onHideStory.emit();
  }

  openUrl(): void {
    const url = this.story?.url;
    if (url) {
      window.open(url);
    }
  }
}
