import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FilmeFormComponent } from './filme-form.component';
import { GeneroListModule } from 'src/app/generos/genero-list/genero-list.module';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        FilmeFormComponent
    ],
    imports: [
        CommonModule,
        GeneroListModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class FilmeFormModule{}