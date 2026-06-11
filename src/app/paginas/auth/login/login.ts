import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css' 
})
export class Login {
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  onLogin(): void {
    console.log('Dados de Login enviados:', this.loginData);
  }
}
