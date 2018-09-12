import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComic } from '../comic-store-list/comic';
import * as _ from "lodash"
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  public pageTitle: string = 'Comic Detail';
  public comicList: IComic[];
  public showComic: any;
  public id: number;
  public formview: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = +this._route.snapshot.params['id'];
    
    if(this.id > 0) {
      this.pageTitle += `: ${this.id}`;
    }

    let newDate = new Date('2011-04-11T10:20:30Z');

    this.comicList = [{
      id: 1,
      name: 'Batman',
      author: 'DC',
      price: '50',
      starRating: 5,
      imageUrl: 'img/batman.jpg',
      publishDate: newDate,
      description: 'Unlike most superheroes, Batman does not possess any superpowers; rather, he relies on his genius intellect, physical prowess, martial arts abilities, detective skills, science and technology, vast wealth, intimidation, and indomitable will.'
    },
    {
        id: 2,
        name: 'Suicide Squad',
        author: 'DC',
        price: '100',
        starRating: 3,
        imageUrl: 'img/suicide_squad.png',
        publishDate: newDate,
        description: 'In Suicide Squad, a secret government agency led by Amanda Waller recruits imprisoned supervillains to execute dangerous black ops missions and save the world from a powerful threat, in exchange for reduced sentences.'
    },
    {
      id: 0,
      name: '',
      author: '',
      price: '0',
      starRating: 0,
      imageUrl: '',
      publishDate: newDate,
      description: ''
  }];

    this.showComic = _.find(this.comicList, ['id', this.id]);
  }

  public onBack(): void {
    this._router.navigate(['/comic']);
  }

  public changeFormView() {
    this.formview = !this.formview;
  }

}
