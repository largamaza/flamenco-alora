import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hide = true;

  form: any = {
    username: null,
    password: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('asdfasdf'+ this.form.username);
  }

}
