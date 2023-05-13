import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductComponent } from './dashboard/product/product.component';
import { AccountComponent } from './dashboard/account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './dashboard/productdetails/productdetails.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // localhost will load home component
  { path: 'products', component: ProductComponent }, // local host will load product component
  { path: 'accounts', component: AccountComponent }, // localhost will load the account component
];

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProductComponent,
    AccountComponent,
    ProductdetailsComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [
    DashboardComponent,
    HomeComponent,
    ProductComponent,
    AccountComponent,
  ],
})
export class RouterDemoModule {}
