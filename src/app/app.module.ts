import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfiliComponent } from './components/profili/profili.component';
import { CardComponent } from './components/card/card.component';


const routes: Route [] = [
  {
    path: '',
    component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'profilo',
    component: ProfiliComponent,
    canActivate:[AuthGuard]
  }
];



@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, ProfiliComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
