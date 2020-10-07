import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';

import { CalendarComponent } from './calendar/calendar.component';
import { MainImgComponent } from './main-img/main-img.component';

import { AboutComponent } from './about/about.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const  appRoutes: Routes = [
  {path: '', component: MainImgComponent},
  {path: 'about', component: AboutComponent},
  {path: 'calendar', component: CalendarComponent},

];

@NgModule({
  declarations: [
    AppComponent,

    CalendarComponent,
    MainImgComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CalendarModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
