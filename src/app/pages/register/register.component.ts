import { UsersService } from './../../services/users.service';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formulario: FormGroup;

  UsersService = inject(UsersService);

  constructor() {
    this.formulario = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit(){
    const response = await this.UsersService.register(this.formulario.value);
    console.log(response);
  }

}
