import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private url: string, private http: HttpClient) {}

  get<T>(params?: any): Observable<T> {
    return this.http.get(`${BASE_URL}${this.url}`).pipe(map((data: T) => data));
  }

  post<T>(body: T): Observable<T> {
    return this.http
      .post(`${BASE_URL}${this.url}`, body)
      .pipe(map((data: T) => data));
  }
}
