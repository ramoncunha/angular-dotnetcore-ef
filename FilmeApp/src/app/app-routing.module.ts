import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeListComponent } from './filmes/filme-list/filme-list.component';
import { FilmeFormComponent } from './filmes/filme-form/filme-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { GeneroListComponent } from './generos/genero-list/genero-list.component';

const routes: Routes = [
  { path: '', component: FilmeListComponent },
  { path: 'novo', component: FilmeFormComponent },
  { path: 'generos', component: GeneroListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
