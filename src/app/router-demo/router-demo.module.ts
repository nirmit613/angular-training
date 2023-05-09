import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductComponent } from './dashboard/product/product.component';
import { AccountComponent } from './dashboard/account/account.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProductComponent,
    AccountComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RouterDemoModule { }
