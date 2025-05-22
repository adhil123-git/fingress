import { Injectable } from '@angular/core';
import {HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      const token = localStorage.getItem('token');
        const Request = request.clone({
      setHeaders: {
        Authorization: `${token}`,
        client_id: "xzXNJFzxNtMvyLIFXCUL1005"
      }
     
    });
    return next.handle(Request);
  }
}
