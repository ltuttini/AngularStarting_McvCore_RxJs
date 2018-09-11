import { Component, OnInit, Input } from '@angular/core';
import { ComicService } from '../../_service/comic/comic.service';
import { IComic } from './comic';
//import { test } from '../../../img/'

@Component({
  //selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  public pageTitle: string = 'Comic Store List';
  public comicList: IComic[];
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

    let newDate = new Date('20/03/1990');

    this.comicList = [{
        id: 1,
        name: 'Batman',
        author: 'DC',
        price: '$50',
        starRating: 5,
        imageUrl: this.imgBatman,
        publishDate: newDate,
        description: 'Unlike most superheroes, Batman does not possess any superpowers; rather, he relies on his genius intellect, physical prowess, martial arts abilities, detective skills, science and technology, vast wealth, intimidation, and indomitable will.'
    },
    {
        id: 2,
        name: 'Suicide Squad',
        author: 'DC',
        price: '$100',
        starRating: 3,
        imageUrl: this.imgSSquad,
        publishDate: newDate,
        description: 'In Suicide Squad, a secret government agency led by Amanda Waller recruits imprisoned supervillains to execute dangerous black ops missions and save the world from a powerful threat, in exchange for reduced sentences.'
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

  onRatingClicked(message: string): void {
    this.pageTitle = 'Comic List: ' + message;
  }

}
