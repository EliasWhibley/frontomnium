import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.formLogin = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  async login() {
    const result = await this.userService.loginUser(this.formLogin.value);
    this.userService.setToken(result['token']);
    this.router.navigate(['/home']);



  }

}
