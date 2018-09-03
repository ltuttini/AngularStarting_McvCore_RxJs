import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComic } from '../comic-store-list/comic';
import * as _ from "lodash"

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  public pageTitle: string = 'Comic Detail';
  public comicList: IComic[];
  public showComic: any;
  public imgBatman: any = 'https://drive.google.com/uc?export=view&id=1khw7o8yByMTV6KRtnKLRaUrClOJKZLv6';
  public imgSSquad: any = 'https://drive.google.com/uc?export=view&id=1KoUHoIDd3ghl3ZwT3QmbysV2C2TGaHBG';

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;

    this.comicList = [{
      id: 1,
      name: 'Batman',
      code: 'DC001',
      price: '$50',
      starRating: 5,
      imageUrl: this.imgBatman
    },
    {
        id: 2,
        name: 'Suicide Squad',
        code: 'DC002',
        price: '$100',
        starRating: 3,
        imageUrl: this.imgSSquad
    }];

    this.showComic = _.find(this.comicList, ['id', id]);
  }

  public onBack(): void {
    this._router.navigate(['/comic']);
  }

}
