import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Replace this with your backend API URL
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    // Perform login API call - Replace this with your actual backend login endpoint
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        if (response && response.token) {
          // If login successful, set user token in localStorage or cookie for future requests
          localStorage.setItem('token', response.token);
          this.loggedIn.next(true); // Update loggedIn status
        }
      })
    );
  }

  logout(): void {
    // Remove user token from localStorage or cookie
    localStorage.removeItem('token');
    this.loggedIn.next(false); // Update loggedIn status
  }

  registerUser(username: string, password: string): Observable<any> {
    // Send registration data to the backend API for user registration
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password });
  }

  // Add other methods like registerUser(), getToken(), etc. based on your requirements
}
