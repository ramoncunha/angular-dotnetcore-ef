import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FilmeListComponent } from './filme-list.component';

@NgModule({
    declarations: [
        FilmeListComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class FilmeListModule{}