import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Id:number;
  Name:string;
  Email:string;
  City:string;
  ngOnInit()
  {
    this.Id=101;
    this.Name="adi";
    this.Email="jc.adi101@gmail.com";
    this.City="Bangalore";
  }

}
