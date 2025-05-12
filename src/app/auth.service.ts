// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://172.16.16.49:7055/v1/trade';

  constructor(private http: HttpClient) {}

 
  signIn(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signIn`, data);
  }
  SignOut(token:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signOut`,token);
  }
  onBoarding(data: any): Observable<any> {
    const headers = new HttpHeaders({
      "client_id": "xzXNJFzxNtMvyLIFXCUL1005"
    })
    return this.http.post(`${this.apiUrl}/onboarding/submit`, data, { headers });
  }
  fetchtable(data: any): Observable<any> {
    const headers = new HttpHeaders({
      "client_id": "xzXNJFzxNtMvyLIFXCUL1005"
    })
    return this.http.post(`${this.apiUrl}/user/list`, data, { headers });
  }
}
