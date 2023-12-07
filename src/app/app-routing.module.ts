import { UrlShortnerComponent } from './user/url-shortner/url-shortner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthUserGuard } from './auth.guard';
import { RedirectUrlComponent } from './user/redirect-url/redirect-url.component';
import { NotfoundComponent } from './user/notfound/notfound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', canActivate: [AuthUserGuard],component: UrlShortnerComponent },
  {path  : 'notFound' ,component:NotfoundComponent},
  { path:':shortenId',component:RedirectUrlComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
