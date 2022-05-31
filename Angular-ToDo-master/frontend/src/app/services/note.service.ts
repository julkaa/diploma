import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private URL = 'http://localhost:3500';
  identity: string;

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return localStorage.getItem('token');
  }

  addNote(note) {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.post<any>(this.URL + '/add-note', note, {
      headers: headers,
    });
  }

  getNotes(user_id) {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.get<any>(this.URL + '/get-notes/' + user_id, {
      headers: headers,
    });
  }
}
