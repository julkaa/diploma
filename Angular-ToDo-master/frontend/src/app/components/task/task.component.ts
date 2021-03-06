import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { UserService } from '../../services/user.service';
import { PublicationService } from 'src/app/services/publication.service';
import { Router } from '@angular/router';
import { List } from '../../interfaces/List';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  identity = JSON.parse(localStorage.getItem('user'));
  listId = JSON.parse(localStorage.getItem('listId'));
  lists: List[];
  id: string;
  task: Task = {
    id: '',
    text: '',
    user_id: +this.identity.id,
    list_id: +this.listId,
    created_at: '',
  };

  constructor(
    private userService: UserService,
    private publicationService: PublicationService,
    private router: Router
  ) {
    this.identity = this.userService.getIdentity();
    console.log(this.identity);
    // this.listId = this.publicationService.getListId();
    // console.log(this.listId)
  }

  ngOnInit(): void {
    console.log(this.lists);
  }

  addTask(id) {
    console.log(this.task);
    this.publicationService.addTask(this.task).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/list']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
