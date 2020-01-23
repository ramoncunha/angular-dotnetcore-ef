import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './signup.component.html'
})
export class SignUpComponent implements OnInit {
    
    signUpForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router){ }
    
    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            password: ['', Validators.required]
        });
    }


    signUp(){
        const newUser = this.signUpForm.getRawValue() as User;
        this.userService.signUp(newUser)
            .subscribe(() => this.router.navigate(['']),
            err => console.log(err)
        );
    }
}