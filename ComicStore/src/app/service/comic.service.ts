import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Comic } from "../models/comic";

@Injectable()
export class ComicService {

  constructor(private http: HttpClient) { }

    public getComicList(): Observable<Comic[]> {
        let url = `${environment.backendUrl}/api/comic`;
        return this.http.get<Comic[]>(url);
    }

    public getComic(comicId: number): Observable<Comic> {
        let url = `${environment.backendUrl}/api/comic/${comicId}`;
        return this.http.get<Comic>(url);
    }

    public update(comic: Comic): Observable<void> {
        let url = `${environment.backendUrl}/api/comic`;
        return this.http.put<void>(url, comic);
    }
}
