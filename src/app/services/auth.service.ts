import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';


@Injectable()
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<IUser>;
  public currentUser: Observable<IUser>;

  constructor(
    private http: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject<IUser>(
      JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }
  token = null;
  isAuth() {
    return this.currentUserSubject;
  }


  login(username: string, password: string) {
    const token = null;
    return this.http.post<any>(`api/auth/login-mobile`, { username, password, token })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
