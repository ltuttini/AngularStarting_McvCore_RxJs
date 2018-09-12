import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../models/comic';
import { ComicService } from '../../service/comic.service';

@Component({
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  public pageTitle: string = 'Comic Store List';
  public comicList: Comic[];
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = false;
  public buttonLabel: string = 'Show Image';
  public listFilter: string;

  constructor(private comicService: ComicService) { }

  ngOnInit() {

    let newDate = new Date('20/03/1990');

     this.comicService.getComicList()
                .subscribe(data=> this.comicList= data);
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
