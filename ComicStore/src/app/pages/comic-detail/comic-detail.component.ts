import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comic } from '../../models/comic';
import * as _ from "lodash"
import { formatDate } from '@angular/common';
import { ComicService } from '../../service/comic.service';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.css']
})
export class ComicDetailComponent implements OnInit {

  public pageTitle: string = 'Comic Detail';
  public showComic: any;
  public id: number;
  public formview: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private comicService : ComicService
  ) {
  }

  ngOnInit(): void {
    this.id = +this._route.snapshot.params['id'];
    
    if(this.id > 0) {
      this.pageTitle += `: ${this.id}`;
    }

    this.comicService.getComic(this.id)
            .subscribe(data=> this.showComic= data);
  }

  public onBack(): void {
    this._router.navigate(['/comic']);
  }

  public changeFormView() {
    this.formview = !this.formview;
  }

  public confirm() {
    
    this.comicService.update(this.showComic)
          .subscribe(() => {
              this.formview = false;
          });
    
  }

}
