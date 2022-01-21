import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angproject';
  public userData:any=[];
  constructor(private ServiceService:ServiceService){
    let a=this.ServiceService.getUserData().subscribe(data=>{
      this.userData=data;
      
    })
  }

}
