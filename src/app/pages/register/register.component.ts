import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}

  onRegister(username: string, email: string, password: string, confirmPassword: string): void {
    // Aquí deberías realizar la lógica para enviar la solicitud HTTP al backend
    // utilizando el servicio HttpClient
    const userData = {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };

    this.http.post('http://localhost:8150/api/register', userData).subscribe(
      (response) => {
        console.log('Registro exitoso:', response);
        // Puedes manejar la respuesta del servidor según tus necesidades
      },
      (error) => {
        console.error('Error durante el registro:', error);
        // Puedes manejar el error del servidor según tus necesidades
      }
    );
  }
}
