import { Component, OnInit, Input } from '@angular/core';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { Handcrafter } from './handcrafter';
import { HandcrafterService } from './handcrafter.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() user: Handcrafter;

  constructor(private handcrafterService: HandcrafterService,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.handcrafterService.getCurrentUser()
      .subscribe(user => this.user = user);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
