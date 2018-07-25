import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HandcraftersComponent } from './handcrafters/handcrafters.component';
import { HandcrafterDetailComponent } from './handcrafter-detail/handcrafter-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { UserPageComponent } from './user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HandcraftersComponent,
    HandcrafterDetailComponent,
    MessagesComponent,
    DashboardComponent,
    UserPageComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class SharedModule {}
