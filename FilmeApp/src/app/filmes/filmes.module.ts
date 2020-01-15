import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmeListModule } from './filme-list/filme-list.module';
import { FilmeFormModule } from './filme-form/filme-form.module';


@NgModule({
    imports: [
        FilmeListModule,
        FilmeFormModule
    ]
})
export class FilmesModule {}