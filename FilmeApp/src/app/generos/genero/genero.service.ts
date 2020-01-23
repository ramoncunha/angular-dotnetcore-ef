import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Genero } from './index';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/core/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http: HttpClient, private userService: UserService){}

  header = {
    headers: new HttpHeaders({
      'Authorization': this.userService.getToken()
    })
  }
    

  listFromApi (){
      return this.http
      .get<Genero[]>( environment.appUrl + '/generos', this.header);
  }
}
