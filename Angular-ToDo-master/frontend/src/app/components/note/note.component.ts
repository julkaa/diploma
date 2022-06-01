import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/Note';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  user;
  userId: any;
  identity = JSON.parse(localStorage.getItem('user'));
  notes: Note[];
  arrNote = [];
  editNoteForm: FormGroup;
  note: Note = {
    id: '',
    title: '',
    text: '',
    user_id: this.identity.userId,
  };

  constructor(
    private userService: UserService,
    private noteService: NoteService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.user = this.userService.getIdentity();
  }

  ngOnInit(): void {
    this.getNotes(this.user.userId);
    console.log(this.notes);
    this.editNoteForm = this.formBuilder.group({
      text: ['', Validators.required],
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '40%',
      panelClass: 'modal-window',
    });
  }

  getNotes(idishka) {
    this.noteService.getNotes(idishka).subscribe(
      (res) => {
        console.log(res);
        this.notes = res.notes;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onSelectNote(el) {
    this.note = el;
    this.editNoteForm.get('text').setValue(el.text);
    console.log(el);
  }

  save() {
    const text = this.editNoteForm.get('text').value;
    this.note.text = text;
    const not = this.note.text;
    console.log(text);
    this.noteService.addNote(not).subscribe(
      (res) => {
        console.log(res);
        this.notes = res.notes;
        // window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
