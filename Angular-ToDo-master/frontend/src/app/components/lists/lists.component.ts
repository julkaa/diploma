import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { List } from '../../interfaces/List';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/Task';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  lists: List[];
  tasks: Task[];
  user;
  // tslint:disable-next-line:variable-name
  user_id: any;

  constructor(
    private publicationService: PublicationService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.userService.getIdentity();
  }

  ngOnInit(): void {
    this.getLists(this.user_id);
  }

  refresh($event = null) {
    console.log(event);
    this.getLists(this.user_id);
  }

  getLists(id) {
    // const user_id = this.user.id;
    // console.log(user_id);
    // this.publicationService.getLists(user_id).subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.lists = res.lists;
    //     this.tasks = res.tasks;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  deleteList(id) {
    // console.log(id);
    // this.publicationService.deleteList(id).subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.refresh();
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  newTask(event) {
    // console.log(event.target.value);
    // this.id = event.target.value;
    // localStorage.setItem('listId', this.id);
    // this.router.navigate(['/add-task']);
  }

  // deleteTask(id) {
  //   console.log('that is', id);
  //   this.publicationService.deleteTask(id).subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.refresh();
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
}
