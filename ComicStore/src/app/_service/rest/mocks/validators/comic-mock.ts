import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { HttpResponse, HttpEvent } from "@angular/common/http";
import { BaseMocks } from "../base-mocks";

@Injectable()
export class ComicMocks extends BaseMocks {

    public matchFound(url: string, urlWithParams: string, method: string): boolean {
        this.match = null;

        if (/api\/comic-site\/.+\/getComicList/.exec(url) && method === this.GET) {
            let body = {
                name: 'Batman',
                company: 'DC',
                price: '$50'
            };

            this.match = of(new HttpResponse({ status: 200, body: body }));
        }

        return this.match != null;
    }

}
