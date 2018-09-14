import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../models/comic';
import { ComicService } from '../../service/comic.service';

@Component({
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css']
})
export class ComicListComponent implements OnInit {
  public pageTitle: string = 'Comic Store List';
  private allComics: Comic[];
  public comicList: Comic[];
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public showImage: boolean = false;
  public buttonLabel: string = 'Show Image';
  public listFilter: string;

  constructor(private comicService: ComicService) { }

  ngOnInit() {
     this.comicService.getComicList()
                .subscribe(data=> {
                  this.allComics = data;
                  this.comicList= data;
                });
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

  filterChanged(filter){

    if(filter == ''){
      this.comicList= this.allComics;
      return;
    }

    this.comicService.getComicByTitle(filter)
          .subscribe(
            (data: Comic[])=> this.comicList= data,
            (err: any) => console.log(err),
            ()=>console.log('get by title complete'));

  }

}
