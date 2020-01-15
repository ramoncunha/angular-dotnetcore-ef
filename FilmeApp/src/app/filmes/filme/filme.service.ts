import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Filme } from './index';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FilmeService {

    constructor(private http: HttpClient){}

    listFromApi (){
        return this.http
        .get<Filme[]>( environment.appUrl + '/filmes');
    }

}