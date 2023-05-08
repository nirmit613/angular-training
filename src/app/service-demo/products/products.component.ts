import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  product = {} as Product;
  isShowSummary: boolean = false;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}

  public addProduct(): void {
    this.productService.addProducts({ ...this.product });
    this.product = {} as Product;
  }

  public showSummary(): void {
    this.isShowSummary = !this.isShowSummary;
  }
}
