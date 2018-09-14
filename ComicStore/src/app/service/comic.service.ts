import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';

import { Comic } from "../models/comic";

@Injectable()
export class ComicService {

  constructor(private http: HttpClient) { }

    public getComicList(): Observable<Comic[]> {
        let url = `${environment.backendUrl}/api/comic`;
        return this.http.get<Comic[]>(url);
    }

    public getComicByTitle(title: string): Observable<Comic[]> {
        let url = `${environment.backendUrl}/api/comic/${title}/filter`;
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

    public save(comic: Comic): Observable<void> {
        let url = `${environment.backendUrl}/api/comic`;
        return this.http.post<void>(url, comic);
    }

    public getComicExt(comicId: number): Observable<ComicExt> {
        let url = `${environment.backendUrl}/api/comic/${comicId}`;
        return this.http.get<Comic>(url)
        .pipe(
            map(c=> <ComicExt>{
                name: c.title,
                year: c.publishDate.getFullYear()
            }),
            tap(c=>console.log(c))
        );
    }

    public getComicListWithHeaders(): Observable<Comic[]> {
        let setHeaders : HttpHeaders = new HttpHeaders({
            'Accept': 'application/json',
            'Autorization':'token'
        });

        let url = `${environment.backendUrl}/api/comic`;
        return this.http.get<Comic[]>(url, {
            headers: setHeaders
        });
    }
}

export class ComicExt {
    name: string;
    year: number;
}