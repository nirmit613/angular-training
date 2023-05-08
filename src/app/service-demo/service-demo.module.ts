import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { SummaryComponent } from './summary/summary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, UsersComponent, SummaryComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProductsComponent],
})
export class ServiceDemoModule {}
