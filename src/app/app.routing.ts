import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyTripsComponent } from './pages/my-trips/my-trips.component';
import { TripPreviewComponent } from './pages/trip-preview/trip-preview.component';
import { TripViewerComponent } from './pages/trip-viewer/trip-viewer.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TestsComponent } from './pages/tests/tests.component';

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
  {
    path:'tests',
    component: TestsComponent,
  }


]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
