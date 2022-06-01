import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PublicationService {
  private URL = 'http://localhost:3500';
  listId;

  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token');
  }

  addList(list) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.post<any>(this.URL + '/add-list', list, {
      headers,
    });
  }

  getLists(user_id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.get<any>(this.URL + '/get-lists/' + user_id, {
      headers,
    });
  }

  addTask(task) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.post<any>(this.URL + '/add-task', task, {
      headers,
    });
  }

  getListId() {
    const listId = JSON.parse(localStorage.getItem('listId'));
    if (listId !== 'undefined') {
      this.listId = listId;
    } else {
      this.listId = null;
    }
    return this.listId;
  }

  deleteList(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.delete<any>(this.URL + '/delete-list/' + id, {
      headers,
    });
  }

  deleteTask(id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.delete<any>(this.URL + '/delete-task/' + id, {
      headers,
    });
  }

  editTask(task) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.post<any>(this.URL + '/update-task/', task, {
      headers,
    });
  }
}
