import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInModule } from './signin/signin.module';
import { SignUpModule } from './signup/signup.module';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SignInModule,
        SignUpModule
    ]
})
export class HomeModule{}