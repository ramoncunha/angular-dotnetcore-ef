import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmeFormViewComponent } from './filme-form-view.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
    declarations: [
        FilmeFormViewComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule
    ]
})
export class FilmeFormViewModule{}