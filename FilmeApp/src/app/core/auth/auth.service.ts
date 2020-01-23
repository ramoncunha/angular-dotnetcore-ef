import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCliente: HttpClient,
              private userService: UserService) { }

  // Header necessário para passar para requisição API.
  headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

  authenticate(email: string, password: string){
    return this.httpCliente.post(environment.appUrl + '/usuarios/login',
      JSON.stringify({
        email,
        password
      }),
      {
        observe: 'response',
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
    )
    .pipe(tap(res => {
      const authToken = 'Bearer ' + res.headers.get('Authorization');
      this.userService.setToken(authToken);
    }))
  }


}
