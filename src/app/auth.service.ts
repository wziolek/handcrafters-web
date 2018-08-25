import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpInterceptor,
         HttpRequest,HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as moment from "moment";


const httpOptions = {
  headers: {'Content-Type': 'text/plain',
            'X-Requested-With': 'XMLHttpRequest'}
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
     
    constructor(
        private http: HttpClient
    ) {}
      
    login(email:string, password:string): Observable<HttpResponse<any>>{
        return this.http.post<any>('https://api.handcrafters.piatkiewicz.com/login', '{"email":"test-rodrigo@test.test","password":"aaaa"}', httpOptions)
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
            .do(res => this.setSession) 
            .shareReplay();
    }

    loginBla(email:string, password:string): any{
            this.login(email, password);
    }

    private setSession(authResult) {
        const expiresAt = moment().add(authResult.expiresIn,'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
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
}

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("id_token");

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}

