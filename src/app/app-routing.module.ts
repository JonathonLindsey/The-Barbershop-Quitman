import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OpenComponent } from './open/open.component';
import { PriceComponent } from './price/price.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'open', component: OpenComponent },
  { path: 'price', component: PriceComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'team', component: TeamComponent },
  { path: 'testimonial', component: TestimonialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


