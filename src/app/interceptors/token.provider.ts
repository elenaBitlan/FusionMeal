import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { AuthenticationService } from '../services/auth.service';

@Injectable()
export class TokenProvider implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
    ) { }
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.authenticationService;
        const localToken = localStorage.getItem('token') || 'test';

        request = request.clone({
            setHeaders: {
                Authorization: auth.token || localToken,
            },
        });
        return next.handle(request);
    }
}

export const tokenProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenProvider,
    multi: true,
};