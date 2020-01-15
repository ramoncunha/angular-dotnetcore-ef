import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FilmeListComponent } from './filme-list/filme-list.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';


@NgModule({
    declarations: [
        FilmeListComponent,
        FilmeFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class FilmesModule {}