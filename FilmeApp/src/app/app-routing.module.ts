import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmeListComponent } from './filmes/filme-list/filme-list.component';
import { FilmeFormComponent } from './filmes/filme-form/filme-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './home/signin/signin.component';
import { FilmeFormViewComponent } from './filmes/filme-form-view/filme-form-view.component';
import { FilmeFormEditComponent } from './filmes/filme-form-edit/filme-form-edit.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignUpComponent } from './home/signup/signup.component';
import { FilmeAuthGuard } from './core/auth/filme.auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'register',
    component: SignUpComponent,
    canActivate: [ AuthGuard ]
  },
  { path: 'filmes', component: FilmeListComponent, canActivate: [ FilmeAuthGuard ]},
  { path: 'filmes/:id', component: FilmeFormViewComponent, canActivate: [ FilmeAuthGuard ] },
  { path: 'new', component: FilmeFormComponent, canActivate: [ FilmeAuthGuard ] },
  { path: 'filmes/edit/:id', component: FilmeFormEditComponent, canActivate: [ FilmeAuthGuard ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
