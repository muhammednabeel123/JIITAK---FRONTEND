import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { AlertComponent } from './shared/alert/alert.component';
import { InputComponent } from './shared/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { UrlShortnerComponent } from './user/url-shortner/url-shortner.component';
import { FormsModule } from '@angular/forms';
import { RedirectUrlComponent } from './user/redirect-url/redirect-url.component';
import { NotfoundComponent } from './user/notfound/notfound.component'; 

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AlertComponent,
    InputComponent,
    LoginComponent,
    UrlShortnerComponent,
    RedirectUrlComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
