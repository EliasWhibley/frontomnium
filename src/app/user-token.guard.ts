import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserTokenGuard implements CanActivate {
  token: any;
  tokenDes: any;
  time: any;
  constructor(private userService: UserService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.token !== null) {
      this.token = this.userService.getToken();
      this.tokenDes = this.getDecodedAccessToken(this.token);
      console.log(this.tokenDes);
      this.time = this.token.exp - this.token.iat
    } else {
      this.router.navigate(['/'])
    };





    if (this.time > 0) {
      return true;
    } else {

      return false;
    }
  };
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

}
