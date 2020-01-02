import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('http')) {
      return next.handle(request);
    }
    const duplicatedRequest = request.clone({
      url: `${environment.apiUrl}/${request.url}`,
    });

    return next
      .handle(duplicatedRequest);
  }
}

export const apiProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
};