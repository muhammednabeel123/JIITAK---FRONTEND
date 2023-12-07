import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http:HttpClient,private router : Router){}
  token:any
  userId:any

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ]);

 

  showAlert = false;
  alertMsg = 'Please! Your Account is being created.';
  alertColor = 'blue';

  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,

  });
  register(): void {
    this.showAlert = true;
    this.alertMsg = 'Please! Verify Your mail.';
    this.alertColor = 'blue';
    this.http.post<any>(`http://localhost:3000/auth/register`, this.registerForm.value, { withCredentials: true })
      .subscribe((res: any) => {
  
        this.token = res.token;
        this.showAlert = true;
        this.alertMsg = res.message;
        this.alertColor = 'red';
  
        this.userId = res.userId;
        
  
       
      }, (err) => {
        this.showAlert = true;
        this.alertMsg = err.error.message;
        this.alertColor = 'red';
      })
    }
}
