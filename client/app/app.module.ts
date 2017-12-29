import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { DetailComponent } from './components/detail/detail.component';

import { DataService } from './services/data.service';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path:'', component: SummaryComponent },
  { path:'detail', component: DetailComponent },
  { path:'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
