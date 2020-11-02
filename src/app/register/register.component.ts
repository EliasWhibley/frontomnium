import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  status: boolean;
  errorResgistration: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.formRegister = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.pattern(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/),
        Validators.required
      ]),
    });
    this.status = false;
    this.errorResgistration = false;
  }

  ngOnInit(): void {
  }

  async register() {
    const result = await this.userService.registerUser(this.formRegister.value);
    console.log(result);
    if (result['status'] == 200) {
      this.status = true;
      this.router.navigate(['/login']);
    } else {
      this.errorResgistration = true;
    }




  }

}
