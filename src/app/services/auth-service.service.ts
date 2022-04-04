import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost/flamenco/socios/getAll.php';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    // login(username: string, password: string): any {
      console.log('usu ' + username);
      console.log('pss ' + password);
    // return {};
    // return this.http.get(AUTH_API, {
    //   username,
    //   password
    // }, httpOptions);
    return this.http.get(AUTH_API);
  }

}
