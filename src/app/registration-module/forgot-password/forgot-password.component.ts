import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  forgotForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  get email() {
    return this.forgotForm.get('email');
  }

  onSubmit() {
    if (this.forgotForm.valid) {
      console.log('Login Form Data:', this.forgotForm.value);
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
