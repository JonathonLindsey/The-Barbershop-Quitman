import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { OpenComponent } from './app/open/open.component';
import { PriceComponent } from './app/price/price.component';
import { ServiceComponent } from './app/service/service.component';
import { TestimonialComponent } from './app/testimonial/testimonial.component';
import { HomeComponent } from './app/home/home.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'open', component: OpenComponent },
  { path: 'price', component: PriceComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'testimonial', component: TestimonialComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


