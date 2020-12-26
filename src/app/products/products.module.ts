import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products.component';

const productsRoutes = [
  {
    path: 'products', children: [
      { path: '', component: ProductsComponent },
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent }
    ]
  }
]

@NgModule({
  declarations: [
    ProductsComponent,
    LaptopComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes)
  ]
})
export class ProductsModule {

  constructor() {
        console.log('Product Module Loaded');
  }
 }
  