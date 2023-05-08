import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    console.log(
      'calling from summary component ',
      this.productService.getAllProducts()
    );
  }
}
