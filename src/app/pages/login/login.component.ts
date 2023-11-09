import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onLogin(): void {
    // Agrega la lógica de inicio de sesión aquí
    console.log('Correo Electrónico:', this.email);
    console.log('Contraseña:', this.password);
  }
}
