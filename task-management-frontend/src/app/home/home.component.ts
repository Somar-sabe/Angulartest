import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName: string = 'Guest'; 

  constructor() {
    
    const isAuthenticated =  true;

    if (isAuthenticated) {
      
      this.userName = 'somar sabe'; 
    }
  }
}

