import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

type LoginFormData = {
  email: string,
  password: string
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl ('')
  password = new FormControl ('')

  onLogin(event: MouseEvent){
    console.log('email: ', this.email.value)
    console.log('password: ', this.password.value)
  }

}
