import { NgModule } from '@angular/core';

import { FilmeListModule } from './filme-list/filme-list.module';
import { FilmeFormModule } from './filme-form/filme-form.module';
import { FilmeFormViewModule } from './filme-form-view/filme-form-view.module';


@NgModule({
    imports: [
        FilmeListModule,
        FilmeFormModule,
        FilmeFormViewModule
    ]
})
export class FilmesModule {}