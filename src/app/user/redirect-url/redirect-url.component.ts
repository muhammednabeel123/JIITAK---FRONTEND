import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect-url',
  templateUrl: './redirect-url.component.html',
  styleUrls: ['./redirect-url.component.css']
})
export class RedirectUrlComponent {
  constructor(
    private route: ActivatedRoute,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const shortenedId = params.shortenId;
      this.http.get(`http://localhost:3000/${shortenedId}`).subscribe((res:any)=>{
        if(res.url){
          window.location.href = res.url;
        }
      })
    });
  }
}
