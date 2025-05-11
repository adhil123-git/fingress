// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://172.16.16.49:7055/api/v1/trade/signIn';

  constructor(private http: HttpClient) {}

  login(payload: { orgCode: string; loginId: string; keyword: string }): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
