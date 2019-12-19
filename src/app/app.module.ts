import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { apiProvider } from './interceptors/api.interceptor';
import { LoginComponent } from './components/login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarouselComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule.forRoot(),
    
   
    
  ],
  providers: [
    apiProvider,
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
