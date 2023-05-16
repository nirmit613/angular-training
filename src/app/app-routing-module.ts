import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './router-demo/dashboard/home/home.component';
import { ProductComponent } from './router-demo/dashboard/product/product.component';
import { ProductdetailsComponent } from './router-demo/dashboard/product/productdetails/productdetails.component';
import { AccountComponent } from './router-demo/dashboard/account/account.component';
import { PageNotFoundComponent } from './router-demo/dashboard/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

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
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
