import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
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
