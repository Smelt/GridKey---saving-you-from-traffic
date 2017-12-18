import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { GoogleTimeComponent } from './google-time/google-time.component';



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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
