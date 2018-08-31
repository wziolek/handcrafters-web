import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpInterceptor,
         HttpRequest,HttpHandler, HttpEvent } from '@angular/common/http';
import { HandcrafterService } from './handcrafter.service';
import { Handcrafter } from './handcrafter';
import { Observable, of } from 'rxjs';
import * as moment from "moment";


const httpOptions = {
    headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'}
    //headers: {'Content-Type': 'application/json'} '{"email":"test-rodrigo@test.test","password":"aaaa"}' 'email=test-rodrigo@test.test&password=aaaa'
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
     
    constructor(
        private http: HttpClient,
        private handcrafterService: HandcrafterService
    ) {}
      
    login(email:string, password:string): Observable<HttpResponse<any>>{
        return this.http.post<any>('https://api.handcrafters.piatkiewicz.com/login', `{"email":"${email}","password":"${password}"}`, httpOptions)
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
            .do(res => {this.setSession(res, email);}) 
            .shareReplay();
    }

    getCurrentUser(){
        this.handcrafterService.getHandcrafters()
            .subscribe(users => {
                for (var user in users){
                    if(users[user]['email'] == localStorage.getItem('email')){
                        localStorage.setItem("user_id", users[user]['id'].toString());
                    }
                }
            });      
    }

    private setSession(authResult, email:string) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.access_token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
        localStorage.setItem("email", email);
        this.getCurrentUser();
    }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem("email");
        localStorage.removeItem("user_id");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }  

    public getToken(): string {
        return localStorage.getItem('id_token');
    }
}

