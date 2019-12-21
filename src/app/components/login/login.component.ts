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
    this.authService.login(loginForm.value.email, loginForm.value.password).subscribe((val) => {
      console.log(val);
      console.log(localStorage.getItem('currentUser'));
      this.router.navigate(['']);
    });
  }

}
