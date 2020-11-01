import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private registerURL: string;
  private loginURL: string;

  constructor(private httpClient: HttpClient) {
    this.registerURL = 'http://127.0.0.1:8000/register';
    this.loginURL = 'http://127.0.0.1:8000/api/login_check'
  };

  registerUser(pUser) {
    return this.httpClient.post(this.registerURL, pUser).toPromise();
  };

  loginUser(pCredentials) {
    console.log('caca')
    return this.httpClient.post(this.loginURL, pCredentials).toPromise();
  };

  setToken(token) {
    localStorage.setItem('token_user', token);
  }

  getToken() {
    localStorage.getItem('token_user');
  };
}
