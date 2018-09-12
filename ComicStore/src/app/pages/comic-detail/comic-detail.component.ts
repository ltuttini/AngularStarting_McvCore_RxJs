import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from '../../models/comic';
import * as _ from "lodash"
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  public pageTitle: string = 'Comic Detail';
  private comicList: any[];
  public showComic: any;
  public id: number;
  public formview: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit(): void {
    this.id = +this._route.snapshot.params['id'];
    
    if(this.id == 0) {
      this.showComic = Comic.new();
      return;
    }

    this.pageTitle += `: ${this.id}`;

    this.comicList = Comic.get();
    this.showComic = _.find(this.comicList, ['id', this.id]);
  }

  public onBack(): void {
    this._router.navigate(['/comic']);
  }

  public changeFormView() {
    this.formview = !this.formview;
  }

}
