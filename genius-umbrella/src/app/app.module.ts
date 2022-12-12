import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main-components/home/home.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { AgencyComponent } from './main-components/Services/agency/agency.component';
import { PayeUmbrellaComponent } from './main-components/Services/paye-umbrella/paye-umbrella.component';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { StartContractingComponent } from './main-components/start-contracting/start-contracting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AgencyComponent,
    PayeUmbrellaComponent,
    AboutUsComponent,
    ContactUsComponent,
    StartContractingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
