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
import { ShotDetailComponent } from './shot-detail/shot-detail.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { NewShotComponent } from './new-shot/new-shot.component';
import { HandcrafterDetailShotsComponent } from './handcrafter-detail-shots/handcrafter-detail-shots.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    HandcraftersComponent,
    HandcrafterDetailComponent,
    MessagesComponent,
    DashboardComponent,
    UserPageComponent,
    ShotDetailComponent,
    NewShotComponent,
    HandcrafterDetailShotsComponent,
    LoginComponent,
    SignupComponent,
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule,
    HttpClientModule,
    FileUploadModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
      // InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
export class SharedModule {}
