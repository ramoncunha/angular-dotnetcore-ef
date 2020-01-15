import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesModule } from './filmes/filmes.module';
import { ErrorsModule } from './errors/errors.module';
import { GeneroListComponent } from './generos/genero-list/genero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FilmesModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
