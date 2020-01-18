import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FilmeListComponent } from './filme-list.component';
import { SearchComponent } from './search/search.component';
import { FilterByTitulo } from './filter-by-titulo.pipe';
import { FilterByGenero } from './filter-by-genero.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        FilmeListComponent,
        SearchComponent,
        FilterByTitulo,
        FilterByGenero
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        CommonModule
    ]
})
export class FilmeListModule{}