import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Filme } from './filme';

@Injectable({
    providedIn: 'root'
})
export class FilmeService {

    constructor(private http: HttpClient){}

    listFromApi (){
        return this.http
        .get<Filme[]>('http://localhost:5000/api/filmes');
    }

}