import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { tap } from 'rxjs/internal/operators/tap';

import { IUser } from '../interfaces/user.interface';

@Injectable()
export class AuthenticationService {
  private static STORAGE_KEY = 'currentUser';

  public currentUser: Observable<IUser>;
  public currentUserSubject: BehaviorSubject<IUser>;
  public token = null;

  constructor(
    public http: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem(AuthenticationService.STORAGE_KEY)),
    );
  }

  public isAuth() {
    return this.currentUserSubject.value;
  }

  public login(username: string, password: string) {
    const token = null;

    return this.http.post<IUser>(`api/auth/login-mobile`, { username, password, token })
      .pipe(
        tap((user) => {
          localStorage.setItem(AuthenticationService.STORAGE_KEY, JSON.stringify(user));
          localStorage.setItem('token', user.token);
          this.currentUserSubject.next(user);
        }));
  }
}
