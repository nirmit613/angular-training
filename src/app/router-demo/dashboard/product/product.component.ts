import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  public goToHome(): void {
    this.router.navigate(['/home']);
  }

  public goToAccounts(): void {
    //this.router.navigate(['accounts'], { relativeTo: this.activatedRoute });
    this.router.navigate(['/accounts']);
  }

  public displayProducts(): void {
    this.router.navigate(['/products', '1', 'default-product'], {
      queryParams: { isDetails: true },
      fragment: 'products-page',
    });
  }
}
