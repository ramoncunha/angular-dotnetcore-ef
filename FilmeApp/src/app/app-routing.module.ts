import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeListComponent } from './filmes/filme-list/filme-list.component';
import { FilmeFormComponent } from './filmes/filme-form/filme-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { GeneroListComponent } from './generos/genero-list/genero-list.component';
import { SignInComponent } from './home/signin/signin.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'filmes', component: FilmeListComponent },
  { path: 'filmes/:id', component: FilmeFormComponent },
  { path: 'novo', component: FilmeFormComponent },
  { path: 'teste', component: GeneroListComponent },
  { path: '**', component: NotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
