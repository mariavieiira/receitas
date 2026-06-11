import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css' 
})
export class Cadastro {
  
  isLoading: boolean = false;

registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '', 
    terms: false
  };

  onRegister() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      console.log('Dados enviados com sucesso:', this.registerData);
    }, 3000);
  }
}