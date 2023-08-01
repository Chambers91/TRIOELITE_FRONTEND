import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'trio-elite-frontend';

  public getJsonValue: any;
  public postJsonValue: any;
  constructor (public http: HttpClient){
    
  }
  ngOnInit(): void{ 
   this.getMethod();
  }
    public getMethod(){
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
        console.log(data);
      })
      }
  }

