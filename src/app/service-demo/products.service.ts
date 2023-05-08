import { Injectable, OnInit } from '@angular/core';

export interface Product {
  productId: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService implements OnInit {
  products: Product[] = [];
  constructor() {}
  public ngOnInit(): void {}
  public addProducts(product: Product): void {
    product.productPrice = Number(product.productPrice);
    this.products.push(product);
    console.log('From product service- ', this.products);
  }
  getAllProducts(): Product[] {
    return this.products;
  }
}
