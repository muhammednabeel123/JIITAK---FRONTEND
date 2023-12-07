import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitter } from '../emitter/emitter';
import { ActivatedRoute } from '@angular/router'; 
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.css']
})
export class UrlShortnerComponent implements OnInit {
  constructor(private http: HttpClient,private router: Router ){}
  isMenuOpen: boolean = false;
  authenticated = false
  showNavBar: boolean = true;
  token:any

  ngOnInit(): void {
     this.token = localStorage.getItem('userToken');
    this.authenticated = !!this.token;
  
    console.log(this.authenticated);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url: string = event.url;
      
       
      }
    });
  }


  toggleNavbar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  logout():void{

  }
  inputUrl: string = '';
  response_url:string = ""

  shortenUrl(url: any) {
    // Here, you can access the shortened URL logic
    this.http.post<any>(`http://localhost:3000/short`,{originalUrl:url.inputUrl,accessToken:this.token}, { withCredentials: true }).subscribe((res) =>{
      console.log(res.shortUrl)
      this.response_url = res.shortUrl
    })
    console.log('Entered URL:', url.inputUrl);
    // You can perform your URL shortening API call or other operations here
  }

  clearInput() {
    console.log("ehy there")
    this.inputUrl = ''; // Clears the input field
  }



}


