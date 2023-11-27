import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    this.http
      .post<{ token: string }>('https://code-coaching.dev/api/token/login', {
        email: email,
        password: password,
      })
      .subscribe((data) => {
        localStorage.setItem('token', data.token);
      });
  }
}
