import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { HomeComponent } from './main-components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './main-components/Services/agency/agency.component';
import { PayeUmbrellaComponent } from './main-components/Services/paye-umbrella/paye-umbrella.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { StartContractingComponent } from './main-components/start-contracting/start-contracting.component';

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'agency', component : AgencyComponent },
  { path : 'paye-umbrella', component : PayeUmbrellaComponent },
  { path : 'about-us', component : AboutUsComponent },
  { path : 'contact-us', component : ContactUsComponent },
  { path : 'start-contracting', component : StartContractingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
