import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() story?: Story = undefined;
  @Input() rankId: number = -1;

  faSortUp = faSortUp;
  faSortDown = faSortDown;
  
  constructor() {}

  ngOnInit(): void { }

  hideStory(): void {
    this.onHideStory.emit();
  }

  openUrl(): void {
    const url = this.story?.url;
    if (url) {
      window.open(url, "_blank");
    }
  }
}
