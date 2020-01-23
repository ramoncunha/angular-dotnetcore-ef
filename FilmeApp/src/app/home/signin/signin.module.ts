import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ComponentsModule,
        RouterModule
    ],
    exports: [
        SignInComponent
    ]
})
export class SignInModule {}