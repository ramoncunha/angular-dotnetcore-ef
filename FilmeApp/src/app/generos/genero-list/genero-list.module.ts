import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneroListComponent } from './genero-list.component';


@NgModule({
    declarations: [
        GeneroListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GeneroListComponent
    ]
})
export class GeneroListModule{}