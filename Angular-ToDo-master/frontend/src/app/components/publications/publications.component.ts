import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../services/publication.service';
import { List } from '../../interfaces/List';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
  identity = JSON.parse(localStorage.getItem('user'));

  list: List = {
    id: '',
    title: '',
    user_id: +this.identity.userId,
    // @ts-ignore
    done: false,
  };

  constructor(private publicationService: PublicationService) {}

  ngOnInit(): void {
    console.log(this.identity);
  }

  addList() {
    this.publicationService.addList(this.list).subscribe(
      (res) => {
        console.log(res);
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
