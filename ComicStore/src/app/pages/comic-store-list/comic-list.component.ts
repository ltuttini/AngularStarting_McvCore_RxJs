import { Component, OnInit, Input } from '@angular/core';
import { ComicService } from '../../_service/comic/comic.service';
import { IComic } from './comic';
//import { test } from '../../../img/'

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  public comicList: IComic[];
  public pageTitle: string = 'Comic Store List';
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public imgBatman: any = 'https://drive.google.com/uc?export=view&id=1khw7o8yByMTV6KRtnKLRaUrClOJKZLv6';
  public imgSSquad: any = 'https://drive.google.com/uc?export=view&id=1KoUHoIDd3ghl3ZwT3QmbysV2C2TGaHBG';
  public showImage: boolean = false;
  public buttonLabel: string = 'Show Image';
  public listFilter: string;

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
        starRating: 5,
        imageUrl: this.imgBatman
    },
    {
        name: 'Suicide Squad',
        code: 'DC002',
        price: '$100',
        starRating: 4,
        imageUrl: this.imgSSquad
    }];
  }

  public showComicImage() {
    this.showImage = !this.showImage;
    if(this.showImage){
      this.buttonLabel = 'Hide Image';
    } else {
      this.buttonLabel = 'Show Image';
    }
  }

}
