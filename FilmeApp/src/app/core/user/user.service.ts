import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    private userSubject = new BehaviorSubject<User>(null);
    // Header necessário para passar para requisição API.
    headers = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(private tokenService: TokenService, private http: HttpClient){
       this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    getToken(){
        return this.tokenService.getToken();
    }

    private decodeAndNotify(){
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }

    signUp(newUser: User){
        return this.http.post(environment.appUrl + '/usuarios/register',
            newUser,
            this.headers
        )
    }
}