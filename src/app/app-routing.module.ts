import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//own routes
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductsComponent } from './pages/products/products.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path:'', component: MenuComponent },
  { path:'error', component: ErrorComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'products', component: ProductsComponent },
  { path:'chat', component: ChatComponent },
// Ricardo ya no es puto
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
