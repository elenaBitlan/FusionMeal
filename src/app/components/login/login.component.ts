import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,
  ) { }

  public login(loginForm) {
    this.authService.login(loginForm.value.name, loginForm.value.password)
      .subscribe(() => {
        this.router.navigate(['/home']);
        this.toastr.success(`Welcome!`);
      });
  }
}
