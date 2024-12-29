import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loginForm.get('password')?.valueChanges.subscribe(() => {
      const usernameControl = this.loginForm.get('username');
      if (usernameControl && !usernameControl.value && usernameControl.touched) {
        console.log('Username is required.');
      }
    });
    this.loginForm.get('username')?.valueChanges.subscribe(() => {
      const passwordControl = this.loginForm.get('password');
      if (passwordControl && !passwordControl.value && passwordControl.touched) {
        console.log('Password is required.');
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login();
      this.router.navigate(['/products']);
    } else {
      console.log('Invalid credentials');
       }
  }
}
