import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyTripsComponent } from './pages/my-trips/my-trips.component';
import { TripPreviewComponent } from './pages/trip-preview/trip-preview.component';
import { TripViewerComponent } from './pages/trip-viewer/trip-viewer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TestsComponent } from './pages/tests/tests.component';

import { SignupService } from './shared/services/signup.service';
import { TestsService } from './shared/services/tests.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    MyTripsComponent,
    TripPreviewComponent,
    TripViewerComponent,
    ProfileComponent,
    TestsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
  ],
  providers: [
    TestsService,
    AuthenticationService,
    SignupService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
