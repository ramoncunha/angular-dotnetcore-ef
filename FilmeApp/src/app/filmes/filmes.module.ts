import { NgModule } from '@angular/core';

import { FilmeListModule } from './filme-list/filme-list.module';
import { FilmeFormModule } from './filme-form/filme-form.module';
import { FilmeFormViewModule } from './filme-form-view/filme-form-view.module';
import { FilmeFormEditModule } from './filme-form-edit/filme-form-edit.module';


@NgModule({
    imports: [
        FilmeListModule,
        FilmeFormModule,
        FilmeFormViewModule,
        FilmeFormEditModule
    ]
})
export class FilmesModule {}