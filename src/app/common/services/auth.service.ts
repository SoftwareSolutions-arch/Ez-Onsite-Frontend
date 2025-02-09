import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

   // Save Token
   saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Get Token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Remove Token (Logout)
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']); // Redirect to login page
  }

  // Check if User is Authenticated
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Returns true if token exists
  }

}
