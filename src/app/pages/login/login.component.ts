import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient) {}

  login() {
    this.http
      .post<{ token: string }>('https://code-coaching.dev/api/token/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
