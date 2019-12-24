import { Injectable, Injector } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { AuthenticationService } from '../services/auth.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private inj: Injector) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.inj.get(AuthenticationService);
        const token = auth.token;
        const localToken = localStorage.getItem('token') || 'test';
        request = request.clone({
            setHeaders: {
                Authorization: token ? token : localToken
            }
        });
        return next.handle(request);
    }
}