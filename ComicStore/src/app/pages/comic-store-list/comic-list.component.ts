import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  public pageTitle: string = 'Comic Store List';
  public comicList: any[];
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = false;
  public buttonLabel: string = 'Show Image';
  public listFilter: string;

  constructor() { }

  ngOnInit() {

    let newDate = new Date('20/03/1990');

    this.comicList = Comic.get();
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
