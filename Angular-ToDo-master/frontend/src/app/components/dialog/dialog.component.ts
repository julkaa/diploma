import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/Note';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  identity = JSON.parse(localStorage.getItem('user'));
  note: Note = {
    id: '',
    title: '',
    text: '',
    user_id: +this.identity.userId,
  };

  constructor(
    public dialogRef: MatDialogRef<any>, // @Inject(MAT_DIALOG_DATA) public data: DialogData
    private noteService: NoteService
  ) {}

  onNoClick(): void {}

  addNote() {
    this.noteService.addNote(this.note).subscribe(
      (res) => {
        console.log(res);
        // window.location.reload();
        this.dialogRef.close();
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  close() {
    this.dialogRef.close();
  }
}
