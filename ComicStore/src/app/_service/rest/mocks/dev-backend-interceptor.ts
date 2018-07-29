import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { mergeMap, delay } from "rxjs/operators";

@Injectable()
export class DevBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null).pipe(mergeMap(() => {

            if (request.url.endsWith('.json')) {
                request = request.clone({
                    // ******* IMPORTANTE *******
                    // hay que reemplazar el localhost:25914 por el puerto del back.
                    url: request.url.replace('//localhost:25914','//localhost:4200')
                });
            }

            return next.handle(request);

        }), delay(500));
    }


}

export let DevBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: DevBackendInterceptor,
    multi: true
};