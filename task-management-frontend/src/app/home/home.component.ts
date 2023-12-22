import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName: string = 'Guest'; // Initialize userName with default value 'Guest'

  constructor() {
    // Logic to check if the user is authenticated (for demonstration purposes)
    const isAuthenticated = /* Perform authentication check */ true;

    if (isAuthenticated) {
      // If authenticated, set userName to the user's name (assuming it's fetched from authentication)
      this.userName = 'John Doe'; // Replace 'John Doe' with the actual user's name
    }
  }
}

