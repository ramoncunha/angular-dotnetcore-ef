import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GeneroListComponent } from './genero-list/genero-list.component';


@NgModule({
  declarations: [
    GeneroListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GeneroListComponent
  ]
})
export class GenerosModule { }
