import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/internal/operators/map';

import { IUser } from '../interfaces/user.interface';

@Injectable()
export class AuthenticationService {
  public currentUser: Observable<IUser>;
  public currentUserSubject: BehaviorSubject<IUser>;
  public token = null;

  constructor(
    public http: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public isAuth() {
    return this.currentUserSubject;
  }

  public login(username: string, password: string) {
    const token = null;

    return this.http.post<any>(`api/auth/login-mobile`, { username, password, token })
      .pipe(map((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
