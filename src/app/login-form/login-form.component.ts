import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';


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

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login(this.form.username, this.form.password).subscribe(
      data => {
        console.log("data" + data[0].id)
      },
      err => {
        console.log("data" + err)

      }
    );
  }

}
