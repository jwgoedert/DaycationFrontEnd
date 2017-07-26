import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyTripsComponent } from './my-trips/my-trips.component';
import { TripPreviewComponent } from './trip-preview/trip-preview.component';
import { TripViewerComponent } from './trip-viewer/trip-viewer.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path:'',
    component: SignupComponent,
  },
  {
    path:'dashboard',
    component: DashboardComponent,
  },
  {
    path:'mytrips',
    component: MyTripsComponent,
  },
   {
    path:'profile',
    component: ProfileComponent,
  },
  {
    path:'signup',
    component: SignupComponent,
  },
  {
    path:'trip-preview',
    component: TripPreviewComponent,
  },
  {
    path:'trip-viewer',
    component: TripViewerComponent,
  },


]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
