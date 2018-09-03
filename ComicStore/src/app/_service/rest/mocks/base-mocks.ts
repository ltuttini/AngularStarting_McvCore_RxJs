import { Observable } from "rxjs";
import { HttpEvent } from "@angular/common/http";

export abstract class BaseMocks {

    public GET: string = "GET";
    public PUT: string = "PUT";
    public POST: string = "POST";

    public match: Observable<HttpEvent<any>>;
    abstract matchFound(url: string, urlWithParams: string, method: string): boolean;

    public getMatch(): Observable<HttpEvent<any>> {
        return this.match;
    }
}