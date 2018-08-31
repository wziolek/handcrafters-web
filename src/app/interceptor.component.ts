import { Injectable, Component, OnInit, Input} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpInterceptor,
         HttpRequest,HttpHandler, HttpEvent } from '@angular/common/http';
import * as moment from "moment";
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
