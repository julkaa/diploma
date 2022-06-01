import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private URL = 'http://localhost:3500';
  identity: string;

  constructor(private http: HttpClient) {}

  getToken() {
    return localStorage.getItem('token');
  }

  addNote(note) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.post<any>(this.URL + '/add-note', note, {
      headers,
    });
  }

  updateNote(note) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.post<any>(this.URL + '/update-note', note, {
      headers,
    });
  }

  getNotes(user_id) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this.http.get<any>(this.URL + '/get-notes/' + user_id, {
      headers,
    });
  }
}
