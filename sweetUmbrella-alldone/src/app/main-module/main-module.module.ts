import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { ServicesComponent } from './MainComponent/services/services.component';
import { ContactUsComponent } from './MainComponent/contact-us/contact-us.component';
import { AboutUsComponent } from './MainComponent/about-us/about-us.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { FooterComponent } from './MainComponent/footer/footer.component';
import { HeaderComponent } from './MainComponent/header/header.component';
import { AgencyComponent } from './MainComponent/agency/agency.component';
import { PayaComponent } from './MainComponent/paya/paya.component';
import { ConstructionComponent } from './MainComponent/construction/construction.component';
import { StartContractingComponent } from './MainComponent/start-contracting/start-contracting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TermsComponent } from './MainComponent/terms/terms.component';
import { ModernSlaveryComponent } from './MainComponent/modern-slavery/modern-slavery.component';
import { PrivacyPolicyComponent } from './MainComponent/privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AgencyComponent,
    PayaComponent,
    ConstructionComponent,
    StartContractingComponent,
    TermsComponent,
    ModernSlaveryComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModuleModule { }
