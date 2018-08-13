import { Component, OnInit, Input } from '@angular/core';
import { ComicService } from '../../_service/comic/comic.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  public comicList: Array<any> = []
  public pageTitle: string = 'Comic Store List';

  constructor(
    private comicService: ComicService,
  ) { }

  ngOnInit() {
    // this.comicService.getComicList()
    //   .subscribe({
    //     next: (response: any) => {
    //       this.comicList = response;
    //     }
    //   })

    this.comicList = [{
        name: 'Batman',
        code: 'DC001',
        price: '$50',
        starRating: 5
    },
    {
        name: 'Suicide Squad',
        code: 'DC002',
        price: '$100',
        starRating: 4
    }];
  }

}
