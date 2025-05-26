
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
    // const headers = new HttpHeaders({
    //   "client_id": "xzXNJFzxNtMvyLIFXCUL1005"
    // })
    return this.http.post(`${this.apiUrl}/onboarding/submit`, data);
  }
  fetchtableuser(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   "client_id": "xzXNJFzxNtMvyLIFXCUL1005"
    // })
    return this.http.post(`${this.apiUrl}/user/list`, data);
  }
  fetchtablecustomer(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   "client_id": "xzXNJFzxNtMvyLIFXCUL1005"
    // })
    return this.http.post(`${this.apiUrl}/customer/list`, data);
  }
  modifycustomer(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   "client_id": "xzXNJFzxNtMvyLIFXCUL1005"
    // })
    return this.http.post(`${this.apiUrl}/customer/modify`, data);
  }
  modifyuser(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   "client_id": "xzXNJFzxNtMvyLIFXCUL1005"
    // })
    return this.http.post(`${this.apiUrl}/user/modify`, data);
  }
  activecustomer(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   "client_id": "xzXNJFzxNtMvyLIFXCUL1005"
    // })
    return this.http.post(`${this.apiUrl}/customer/active`, data);
  }
  inactivecustomer(data: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   "client_id": "xzXNJFzxNtMvyLIFXCUL1005"
    // })
    return this.http.post(`${this.apiUrl}/customer/inActive`, data);
  }
  permission(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/organizations/products-permissions/list`,data);
  }
}
