import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import Post from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Array<any>>(`${this.baseUrl}/posts?_limit=10`);
  }
  
  addPost(post: any){
    return this.http.post<any>(`${this.baseUrl}/posts`, post);
  }

  deletePost(id: Number){
    return this.http.delete<any>(`${this.baseUrl}/posts/${id}`);
  }
}
