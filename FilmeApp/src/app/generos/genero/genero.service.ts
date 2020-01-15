import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Genero } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient){}

    listFromApi (){
        return this.http
        .get<Genero[]>('http://localhost:5000/api/generos');
    }
}
