import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

declare var urljoin: any; // Magic

interface RestParams {
  baseUrl: string,
  endpoint: string,
  body?: any,
  params?: any,
  headers?: HttpHeaders,
  extraConfig?: RestConfig,
  responseType?: 'json' | 'blob' | 'arrayBuffer'
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get({ baseUrl, endpoint, params, headers, extraConfig, responseType }: RestParams)
    : Observable<Object>;
  public get({ baseUrl, endpoint, params, headers, extraConfig, responseType }: RestParams)
    : Observable<ArrayBuffer>;

  public get({ baseUrl, endpoint, params, headers, extraConfig, responseType = 'json' }: RestParams)
    : Observable<Object> | Observable<ArrayBuffer> {
    return this.execute('get', responseType, { baseUrl, endpoint, params, headers, extraConfig });
  }

  public put({ baseUrl, endpoint, body, headers, extraConfig }: RestParams) {
    return this.execute('put', undefined, { baseUrl, endpoint, body, headers, extraConfig });
  }

  public post({ baseUrl, endpoint, body, headers, extraConfig }: RestParams) {
    return this.execute('post', undefined, { baseUrl, endpoint, body, headers, extraConfig });
  }

  private execute(verb: string, responseType: any, {
    baseUrl, endpoint, body, params,
    headers,
    extraConfig }: RestParams): Observable<any> {

    let url = urljoin(baseUrl, endpoint);

    headers = this.setHeaderMetaData(headers, extraConfig);

    switch (verb) {
      case 'get':
        return this.http.get(url, { headers, params, responseType });
      case 'post':
        return this.http.post(url, body, { headers, responseType });
      case 'put':
        return this.http.put(url, body, { headers, responseType });
      default:
        throw new Error('Invalid verb');
    }
  }

  private setHeaderMetaData(headers: HttpHeaders, extraConfig: RestConfig): HttpHeaders {
    if (extraConfig == null) return headers;

    if (headers == null) {
      headers = new HttpHeaders()
        .set('X-META-DATA-HANDLED-ERROR', String(extraConfig.handledError || false))
        .set('X-META-DATA-HIDE-ROUTER', String(extraConfig.loaderMustHideRouter || false));
    } else {
      headers
        .set('X-META-DATA-HANDLED-ERROR', String(extraConfig.handledError || false))
        .set('X-META-DATA-HIDE-ROUTER', String(extraConfig.loaderMustHideRouter || false));
    }
    return headers;
  }
}
