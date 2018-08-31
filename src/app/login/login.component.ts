import { Injectable, Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../auth.service';
import * as moment from "moment";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() message = {type: '', messages: []};

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(email: string, password: string){
    if(!email || !password){
      this.message = {
        type: 'error',
        messages: ["Email and password can't be empty!"],
      };
    }else{
      this.authService.login(email, password)
        .subscribe(
          m=>{
            console.log(m);
            this.router.navigate(['/']);
          },
          err=>{
            // if(err['error']['messages'] == 'Unauthorized'){
            //   var msg = ["Wrong login or password."];
            // }else{
            //   var msg = [err['error']['messages']];
            // };
            console.log(err['error']['messages']);
            this.message = {
              type: 'error',
              messages: err['error']['messages'],
            };
            console.log(this.message);

          }
        );
    }
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
