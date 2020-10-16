import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names = ["Barak Obama","Lewis Hamilton","Scarlett Jahanson","Antonio Conte","Marcello Rossi",
  "Alberto Barbero","Debora Servetti","Paolo Cortese","Paolino Paperino"];
  myName = 'Pittatore Camilla';

  changeName(){
    this.myName = this.names[this.getRandomInt(0,8)];
    
  }


  getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min+1)) + min;
  }
  
}
