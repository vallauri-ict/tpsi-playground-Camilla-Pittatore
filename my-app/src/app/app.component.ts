import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  names=["sono bello","sono figo","sono fotomodello","sono denis dosio","levati la corona","indossa l'armatura","roberta è scontrosa","edoardo rompe","filippo II",];
  myName= 'Camilla Pttatore';
  

  changeName(){
    this.myName=this.names[Math.floor(Math.random()*9)];
  }
}

