import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ]
})
export class AuthModule { }
