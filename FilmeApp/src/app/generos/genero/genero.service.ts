import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Genero } from './index';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient){}

    listFromApi (){
        return this.http
        .get<Genero[]>( environment.appUrl + '/generos');
    }
}
