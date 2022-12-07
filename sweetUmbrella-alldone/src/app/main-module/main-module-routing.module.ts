import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { AboutUsComponent } from './MainComponent/about-us/about-us.component';
import { AgencyComponent } from './MainComponent/agency/agency.component';
import { ContactUsComponent } from './MainComponent/contact-us/contact-us.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ModernSlaveryComponent } from './MainComponent/modern-slavery/modern-slavery.component';
import { PayaComponent } from './MainComponent/paya/paya.component';
import { PrivacyPolicyComponent } from './MainComponent/privacy-policy/privacy-policy.component';
import { ServicesComponent } from './MainComponent/services/services.component';
import { StartContractingComponent } from './MainComponent/start-contracting/start-contracting.component';
import { TermsComponent } from './MainComponent/terms/terms.component';



const routes: Routes = [{ path: '', component: MainModuleComponent ,children:[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'service',component:ServicesComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'agency',component:AgencyComponent},
  {path:'paye',component:PayaComponent},
  {path:'start',component:StartContractingComponent},
  {path:'terms',component:TermsComponent},
  {path:'slavery',component:ModernSlaveryComponent},
  {path:'privacy',component:PrivacyPolicyComponent}
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
