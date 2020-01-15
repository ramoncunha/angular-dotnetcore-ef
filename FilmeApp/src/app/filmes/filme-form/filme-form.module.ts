import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmeFormComponent } from './filme-form.component';
import { GeneroListModule } from 'src/app/generos/genero-list/genero-list.module';

@NgModule({
    declarations: [
        FilmeFormComponent
    ],
    imports: [
        CommonModule,
        GeneroListModule
    ]
})
export class FilmeFormModule{}