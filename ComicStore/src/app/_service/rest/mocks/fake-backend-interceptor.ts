import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { mergeMap, materialize, dematerialize, delay } from "rxjs/operators";
import { ComicMocks } from "./validators/comic-mock";

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor(
        private comicMock: ComicMocks
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            if (this.comicMock.matchFound(request.url, request.urlWithParams, request.method)) {
                return this.comicMock.getMatch();
            }

            if (request.url.endsWith('.json')) {
                request = request.clone({
                    url: request.url.replace('//localhost:25914', '//localhost:4200')
                });
            }

            return next.handle(request);

        }), delay(1500));
    }

    private validateToken(token: string) {
        if (token !== 'Bearer fake-jwt-token') {
            return Observable.throw('Unauthorised');
        }
    }

}

export let FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};