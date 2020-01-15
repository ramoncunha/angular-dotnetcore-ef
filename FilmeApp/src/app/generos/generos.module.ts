import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneroListComponent } from './genero-list/genero-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GeneroListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class GenerosModule { }
