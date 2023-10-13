import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    { name: 'Producto 1', price: 5.99, imageUrl: 'URL_IMAGEN_1' },
    { name: 'Producto 2', price: 18.99, imageUrl: 'URL_IMAGEN_2' },
    { name: 'Producto 3', price: 4.99, imageUrl: 'URL_IMAGEN_2' },
    { name: 'Producto 4', price: 9.99, imageUrl: 'URL_IMAGEN_2' },
    { name: 'Producto 5', price: 4.49, imageUrl: 'URL_IMAGEN_2' },
    { name: 'Producto 6', price: 2.66, imageUrl: 'URL_IMAGEN_2' },
    { name: 'Producto 7', price: 6.03, imageUrl: 'URL_IMAGEN_2' },
    { name: 'Producto 8', price: 20.52, imageUrl: 'URL_IMAGEN_2' },
    { name: 'Producto 9', price: 28.69, imageUrl: 'URL_IMAGEN_2' },
    // Aqui se agregan los productos
  ];

}
