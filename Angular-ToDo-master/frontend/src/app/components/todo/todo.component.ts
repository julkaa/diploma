import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PublicationService } from '../../services/publication.service';
import { UserService } from '../../services/user.service';
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
  isDone = false;
  IsInProgress = false;
  identity = JSON.parse(localStorage.getItem('user'));
  listId = JSON.parse(localStorage.getItem('listId'));
  task: Task = {
    id: '',
    text: '',
    user_id: +this.identity.id,
    list_id: +this.listId,
    inprogress: this.IsInProgress,
    done: this.isDone,
  };
  arrTask = [];
  newTask = [];
  arrList = [];

  constructor(
    private fb: FormBuilder,
    private publicationService: PublicationService,
    private userService: UserService
  ) {
    this.user = this.userService.getIdentity();
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    });
    this.getLists(this.user.userId);
    // this.getTask(this.listId);

    console.log(this.arrList);
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
    this.task.id = task.id;
    localStorage.setItem('taskId', task.id);
    this.todoForm.controls.task.setValue(this.task.text);
    this.updateIndex = i;
    this.isEditEnabled = true;
  }

  updateTask(id) {
    console.log(id);
    this.tasks[this.updateIndex].text = this.todoForm.value.task;
    this.tasks[this.updateIndex].done = false;

    this.tasks.forEach((element) => {
      // const listid = element.list_id;
      // const trueTaskId = localStorage.getItem('taskId');
      if (id === element.id) {
        this.newTask.push(element);
      }
    });

    const el = this.newTask[0];
    console.log(el);
    this.publicationService.editTask(el).subscribe(
      (res3) => {
        console.log(res3);
        this.refresh();
        // window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
    this.updateIndex = undefined;
    this.isEditEnabled = false;
    this.todoForm.reset();
  }

  refresh($event = null) {
    console.log(event);
    this.getLists(this.userId);
  }

  deleteTask(i: number, id) {
    this.tasks.splice(i, 1);
    console.log(id);
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

  deleteInProgress(i: number) {
    this.inprogress.splice(i, 1);
  }

  deleteDoneTask(i: number) {
    this.done.splice(i, 1);
  }

  drop(event: CdkDragDrop<Task[]>) {
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

  getLists(idishka) {
    this.publicationService.getLists(idishka).subscribe(
      (res) => {
        res.tasks.forEach((element) => {
          const listid = element.list_id;
          if (listid === this.listId) {
            this.arrTask.push(element);
          }
        });
        res.lists.forEach((element) => {
          const listid = element.id;
          if (listid === this.listId) {
            this.arrList.push(element);
          }
        });
        this.tasks = this.arrTask;
        this.lists = this.arrList;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
