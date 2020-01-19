import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeListComponent } from './filmes/filme-list/filme-list.component';
import { FilmeFormComponent } from './filmes/filme-form/filme-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './home/signin/signin.component';
import { FilmeFormViewComponent } from './filmes/filme-form-view/filme-form-view.component';
import { FilmeFormEditComponent } from './filmes/filme-form-edit/filme-form-edit.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'filmes', component: FilmeListComponent },
  { path: 'filmes/:id', component: FilmeFormViewComponent },
  { path: 'new', component: FilmeFormComponent },
  { path: 'filmes/edit/:id', component: FilmeFormEditComponent },
  { path: '**', component: NotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
