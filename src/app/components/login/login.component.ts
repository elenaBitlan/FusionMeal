import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  public login(loginForm) {
    this.authService.login(loginForm.value.email, loginForm.value.password).subscribe((val) => {
      this.authService.token = val.token;
      localStorage.setItem('token', val.token);
      this.router.navigate(['/home']);
    });
  }
}
