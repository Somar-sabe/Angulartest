import { Component } from '@angular/core';
import { AuthService } from '../Auth.service'; // Import your authentication service

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';
  registrationError: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.registrationError = ''; // Clear previous registration error
    this.authService.registerUser(this.username, this.password).subscribe(
      () => {
        // Registration successful, perform further actions (e.g., redirect to login)
        console.log('Registration successful');
      },
      error => {
        this.registrationError = 'Registration failed'; // Handle registration errors
        console.error('Registration failed', error);
      }
    );
  }
}
