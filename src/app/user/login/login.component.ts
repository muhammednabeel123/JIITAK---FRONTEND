
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private http: HttpClient,
    private router : Router,
  ){}
 
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
    
  ]);
  showAlert = false;
  alertMsg = 'Please! Your Account is being created.';
  alertColor = 'blue';

  LoginForm = new FormGroup({
 
    email: this.email,
    password: this.password,
   
  });
  login(): void {
    this.showAlert = true;
    this.alertMsg = 'Please! You are being logged';
    this.alertColor = 'blue';
  
    this.http.post<any>(`http://localhost:3000/auth/login`, this.LoginForm.value, { withCredentials: true }).subscribe(
      (res: any) => {    
      
        if ( res.message === 'Password is incorrect') {
          this.showAlert = true;
          this.alertMsg = res.message ;
          this.alertColor = 'red';
          
        }
        else if(res.message === 'Email not Found'){
          this.showAlert = true;
          this.alertMsg = res.message ;
          this.alertColor = 'red';
        } else {
          localStorage.setItem('userToken',res.token)
          this.router.navigate(['/home']);
          
        }
      },
      (err) => {
        this.showAlert = true;
        this.alertMsg = err.error.message;
        this.alertColor = 'red';
      }
    );
  }

}
