import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  login(loginForm) {
    this.authService.login(loginForm.values.email, loginForm.values.password);
    this.router.navigate(['']);
  }


}
