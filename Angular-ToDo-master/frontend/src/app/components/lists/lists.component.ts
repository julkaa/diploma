import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { List } from '../../interfaces/List';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/Task';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  lists: List[];
  tasks: Task[];
  user;
  // tslint:disable-next-line:variable-name
  userId: any;
  expanded = false;
  manualToggle;

  constructor(
    private publicationService: PublicationService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.userService.getIdentity();
  }

  ngOnInit(): void {
    this.getLists(this.userId);
  }

  get sidebarWidth(): number {
    return this.expanded ? 240 : 15;
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  refresh($event = null) {
    console.log(event);
    this.getLists(this.userId);
  }

  getLists(id) {
    const userId = this.user.id;
    console.log(userId);
    this.publicationService.getLists(userId).subscribe(
      (res) => {
        console.log(res);
        this.lists = res.lists;
        this.tasks = res.tasks;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteList(id) {
    console.log(id);
    this.publicationService.deleteList(id).subscribe(
      (res) => {
        console.log(res);
        this.refresh();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  newTask(event) {
    console.log(event);
    event.target.id = event.target.value;
    console.log(event.target.id);
    localStorage.setItem('listId', event.target.id.toString());
    this.router.navigate(['/task']);
  }

  deleteTask(id) {
    console.log('that is', id);
    this.publicationService.deleteTask(id).subscribe(
      (res) => {
        console.log(res);
        this.refresh();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
