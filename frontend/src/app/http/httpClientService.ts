import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
    constructor(private httpClient: HttpClient) { }

    public get<T>(url: string, options?: any): Observable<T> {
        const token = localStorage.getItem('token');

        var httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        })

        if (token) {
            httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
        }
        
        const httpOptions = {
            headers: httpHeaders
        }

        return this.httpClient.get(
            url,
            httpOptions
          ).pipe(
            map((response: any) => this.ReturnResponseData(response)),
            catchError(this.handleError)
          );
    }

    public post<T>(url: string, options?: any, body?: any): Observable<T> {
        const token = localStorage.getItem('token');

        var httpHeaders = new HttpHeaders({
            'Content-Type': 'application/json'
        })

        if (token) {
            httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
        }
        
        const httpOptions = {
            headers: httpHeaders
        }

        return this.httpClient.post(
            url,
            body,
            httpOptions
          ).pipe(
            map((response: any) => this.ReturnResponseData(response)),
            catchError(this.handleError)
          );
    }

    private ReturnResponseData(response: any) {
        return response;
      }
      private handleError(error: any) {
        return throwError(error);
      }
}