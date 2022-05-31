import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('text') text: string;
  @Input('route') route: string;
  expanded = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.expanded = !this.expanded;
  }

  get sidebarWidth(): number {
    return this.expanded ? 300 : 15;
  }
}
