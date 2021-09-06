import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { combineAll } from 'rxjs/operators';

// import Post from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = 'https://jsonplaceholder.typicode.com';
  baseUrl2 = 'http://3.130.239.232:3002/jobpayment/overview?pageNo=1&limit=10';

  constructor(private http: HttpClient) { }

  getPosts() {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOjkzMSwidXNlcklkIjo0OCwicm9sZSI6IkFETUlOIiwicmVmcmVzaFRva2VuIjoidXd1bWFkaGtvaSIsImlhdCI6MTYzMDkwNzMxMiwiZXhwIjoxNjMwOTI1MzEyfQ.djAufLD3-_UMtpCLniaO49VnWhhJzA_Dig_u4txZvaE'});
      

    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<Array<any>>(this.baseUrl2,httpOptions);
    // data.subscribe(res=>{
    //   console.log('data res',res);
    // })
    // return data;
  }
  
  addPost(post: any){
    return this.http.post<any>(`${this.baseUrl}/posts`, post);
  }

  deletePost(id: Number){
    return this.http.delete<any>(`${this.baseUrl}/posts/${id}`);
  }
}
