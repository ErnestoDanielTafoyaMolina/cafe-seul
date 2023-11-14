import { UsersService } from './../../services/users.service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup;

  UsersService = inject(UsersService);
  constructor(){
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  async onSubmit(){
    const response = await this.UsersService.login(this.formulario.value);
    console.log(response);
  }

}
