import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('emailInput', {static: false}) emailInput: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){ }

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  login(){

    this.authService.authenticate(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value
    ).subscribe( () => this.router.navigate(['filmes']), err => this.emailInput.nativeElement.focus())

  }

}
