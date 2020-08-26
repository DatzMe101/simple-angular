import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpRequestService } from './http-request.service';

export interface IPost {
  id?: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService extends HttpRequestService {
  constructor(http: HttpClient) {
    super('/posts', http);
  }
}
