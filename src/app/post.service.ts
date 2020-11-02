import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl: string;
  private httpOptions: object;
  constructor(private httpClient: HttpClient, private userService: UserService) {
    this.apiUrl = 'http://127.0.0.1:8000/api/posts';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.userService.getToken()
      })
    }
  };

  getPosts() {
    return this.httpClient.get(this.apiUrl, this.httpOptions).toPromise();
  };

  addPost(pData) {
    return this.httpClient.post(this.apiUrl, pData, this.httpOptions).toPromise();
  };

  getOnlyPost(pId) {
    return this.httpClient.get(this.apiUrl + '/' + pId, this.httpOptions).toPromise();
  };

  updatePost(pId, pData) {
    return this.httpClient.put(this.apiUrl + '/' + pId, pData, this.httpOptions).toPromise();
  };

  deletePost(pId) {
    return this.httpClient.delete(this.apiUrl + '/' + pId, this.httpOptions).toPromise();
  };

}
