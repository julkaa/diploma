import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moving-nav',
  templateUrl: './moving-nav.component.html',
  styleUrls: ['./moving-nav.component.scss'],
})
export class MovingNavComponent implements OnInit {
  expanded;

  constructor() {}

  ngOnInit(): void {}

  get sidebarWidth(): number {
    return this.expanded ? 0 : -137;
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
