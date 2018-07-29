import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  constructor(
    private rest: RestService
  ) { }

  public getComicList() {
    return this.rest.get({
      baseUrl: '//localhost:4200',
      endpoint: 'api/comic-site/getComicList'
    });
  }
}
