import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContinentsComponent } from './continents/continents.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaysComponent } from './pays/pays.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CountryPipe } from './country.pipe';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    DetailsComponent,
    NavbarComponent,
    PaysComponent,
    CountryPipe,
    CountryComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
