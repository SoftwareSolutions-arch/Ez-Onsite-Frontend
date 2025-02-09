import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  successMessage = '';
  errorMessage = '';
  isLoading = false;

  constructor(private router: Router,private registerService: RegistrationService,private authService:AuthService) {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/']);
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.registerService.loginUser(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.status === 'success') {
            this.loginForm.reset();
            this.successMessage = response.message || 'Login successfully!';
            this.authService.saveToken(response.token);
            this.router.navigate(['/home']);
          }
          else{
            this.errorMessage = response.message || 'Something went wrong!';
          }
        },
        error: (error) => {
          this.errorMessage = error.error.message || 'Something went wrong!';
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // Ensure register route is defined in app-routing.module.ts
  }
}
