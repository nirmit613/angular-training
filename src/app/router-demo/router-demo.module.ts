import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProductComponent } from './dashboard/product/product.component';
import { AccountComponent } from './dashboard/account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './dashboard/product/productdetails/productdetails.component';
import { PageNotFoundComponent } from './dashboard/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'products',
    component: ProductComponent,
    children: [
      {
        path: ':productId/:productName',
        component: ProductdetailsComponent,
      },
    ],
  },
  { path: 'accounts', component: AccountComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    ProductComponent,
    AccountComponent,
    ProductdetailsComponent,
    PageNotFoundComponent,
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
