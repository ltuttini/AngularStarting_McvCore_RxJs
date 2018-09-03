import { Component } from '@angular/core';
import { ComicService } from './_service/comic/comic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testing: any = {};
  flag: boolean = false;

  constructor(
    private comicService: ComicService
  ) {}

  public test () {
    this.comicService.getComicList()
      .subscribe({
        next: (response) => {
          this.testing = response,
          this.flag = true
        }
      })
  }
}
