import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsComponent } from './pages/products/products.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './pages/chat/chat.component';
import { CafeproductComponent } from './components/cafeproduct/cafeproduct.component';
import { ErrorComponent } from './pages/error/error.component';
import { CofeeProductsComponent } from './pages/cofee-products/cofee-products.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    MenuComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    CafeproductComponent,
    ErrorComponent,
    CofeeProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
