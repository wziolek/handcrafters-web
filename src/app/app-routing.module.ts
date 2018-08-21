import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HandcraftersComponent }  from './handcrafters/handcrafters.component';
import { HandcrafterDetailComponent }  from './handcrafter-detail/handcrafter-detail.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent} from './app.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ShotDetailComponent } from './shot-detail/shot-detail.component';
import { NewShotComponent } from './new-shot/new-shot.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user/:id', component: HandcrafterDetailComponent },
  { path: 'handcrafters', component: HandcraftersComponent },
  { path: 'myaccount', component: UserPageComponent },
  { path: 'shot/:id', component: ShotDetailComponent },
  { path: 'addshot', component: NewShotComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignupComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes), NgbModule.forRoot(), MatDialogModule, NoopAnimationsModule],
  bootstrap: [AppComponent],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
