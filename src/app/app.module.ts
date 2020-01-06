import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';

import { apiProvider } from './interceptors/api.interceptor';
import { tokenProvider } from './interceptors/token.interceptor';

import { AuthGuard } from './guards/auth.guard';

import { OrderService } from './services/order.service';
import { AuthenticationService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      tapToDismiss: true,
      progressBar: true,
    }),
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    apiProvider,
    OrderService,
    DatePipe,
    tokenProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
