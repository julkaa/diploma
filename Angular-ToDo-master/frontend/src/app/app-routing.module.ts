import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ListsComponent } from './components/lists/lists.component';
import { TodoComponent } from './components/todo/todo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoComponent } from './components/video/video.component';
import { PostComponent } from './components/post/post.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TaskComponent } from './components/task/task.component';
import { NoteComponent } from './components/note/note.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'video',
    component: VideoComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'note',
    component: NoteComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'registration',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'add-list',
  //   component: PublicationsComponent,
  // },
  // {
  //   path: 'task',
  //   component: TaskComponent,
  // },
  {
    path: 'list',
    component: ListsComponent,
    children: [
      {
        path: 'add-task',
        component: TaskComponent,
      },
    ],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
