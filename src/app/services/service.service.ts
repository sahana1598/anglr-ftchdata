import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
    
  }
  getUserData(){
    let url="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
  }
  
}


