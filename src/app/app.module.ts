import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { TripPreviewComponent } from './trip-preview/trip-preview.component';
import { TripViewerComponent } from './trip-viewer/trip-viewer.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    MyTripsComponent,
    TripPreviewComponent,
    TripViewerComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
