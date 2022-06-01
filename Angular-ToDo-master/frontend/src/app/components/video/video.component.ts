import { Component, OnInit } from '@angular/core';
import { card } from './video.animations';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  animations: [card],
})
export class VideoComponent implements OnInit {
  expanded = false;

  constructor() {}

  ngOnInit(): void {}

  get sidebarWidth(): number {
    return this.expanded ? 0 : -137;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
