import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Filme } from './index';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class FilmeService {

    constructor(private http: HttpClient){}

    // Header necessário para passar para requisição API.
    headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    listFromApi(): Observable<Filme[]> {
        return this.http
        .get<Filme[]>( environment.appUrl + '/filmes');
    }

    getFilme (id: number): Observable<Filme> {
        return this.http.get<Filme>(environment.appUrl + '/filmes/' + id);
    }

    delete(id: number): Observable<Filme>{
        return this.http.delete<Filme>(environment.appUrl + '/filmes/' + id);
    }

    add(titulo: string, diretor: string, genero: string, sinopse: string, ano: string) {
        
        return this.http.post(environment.appUrl + '/filmes', JSON.stringify({
            "titulo": titulo,
            "diretor": diretor,
            "genero": {"nome": genero },
            "sinopse": sinopse == '' ? null : sinopse,
            "ano": ano == '' ? 0 : ano
        }), this.headers);
        
    }

}