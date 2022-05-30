import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../../model/task';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PublicationService } from '../../services/publication.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { List } from '../../interfaces/List';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  // tasks: ITask[] = [];
  inprogress: Task[] = [];
  done: Task[] = [];
  updateIndex: any;
  isEditEnabled = false;
  listTitle = localStorage.getItem('listTitle');
  user;
  // tslint:disable-next-line:variable-name
  userId: any;
  lists: List[];
  tasks: Task[];
  identity = JSON.parse(localStorage.getItem('user'));
  listId = JSON.parse(localStorage.getItem('listId'));
  task: Task = {
    id: '',
    text: '',
    user_id: +this.identity.id,
    list_id: +this.listId,
    inprogress: false,
    done: false,
  };

  constructor(
    private fb: FormBuilder,
    private publicationService: PublicationService,
    private userService: UserService,
    private router: Router
  ) {
    this.user = this.userService.getIdentity();
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    });
    this.getLists(this.userId);
  }

  addTask(id) {
    this.tasks.push({
      id: '',
      inprogress: false,
      list_id: this.listId,
      user_id: this.identity.id,
      text: this.todoForm.value.task,
      done: false,
    });
    this.publicationService.addTask(this.task).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.todoForm.reset();
  }

  onEdit(task: Task, i: number) {
    this.todoForm.controls['task'].setValue(this.task.text);
    this.updateIndex = i;
    this.isEditEnabled = true;
  }

  updateTask() {
    this.tasks[this.updateIndex].text = this.todoForm.value.task;
    this.tasks[this.updateIndex].done = false;
    this.todoForm.reset();
    this.updateIndex = undefined;
    this.isEditEnabled = false;
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  deleteInProgress(i: number) {
    this.inprogress.splice(i, 1);
  }

  deleteDoneTask(i: number) {
    this.done.splice(i, 1);
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
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
}
