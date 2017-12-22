import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { GoogleTimeComponent } from './google-time/google-time.component';
import { GoogleMapsApiService } from './services/google-maps-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


const appRoutes: Routes = [

  { path: '', component: LandingComponent },
  { path: 'google-time', component: GoogleTimeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GoogleTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [GoogleMapsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
