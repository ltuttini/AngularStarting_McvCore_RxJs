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
      baseUrl: environment.backendUrl,
      endpoint: 'api/comic-site/getComicList'
    });
  }
}
