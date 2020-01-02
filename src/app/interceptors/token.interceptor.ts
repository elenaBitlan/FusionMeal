import { Injectable, Injector } from '@angular/core';
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
export class TokenInterceptor implements HttpInterceptor {
    constructor(private inj: Injector) { }
    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.inj.get(AuthenticationService);
        const token = auth.token;
        const localToken = localStorage.getItem('token') || 'test';

        request = request.clone({
            setHeaders: {
                Authorization: token ? token : localToken,
            },
        });
        return next.handle(request);
    }
}

export const tokenInterceptor = {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
}