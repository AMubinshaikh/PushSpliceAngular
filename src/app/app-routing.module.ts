import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [

  //{path:'', redirectTo:'Login' pathMatch:'full},
  { path: '', component: HomeComponent },// empty path for default route
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes)
  ],

  exports: 
  [
    RouterModule
  ]
  
})
export class AppRoutingModule { }
