import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HandcraftersComponent }  from './handcrafters/handcrafters.component';
import { HandcrafterDetailComponent }  from './handcrafter-detail/handcrafter-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HandcrafterDetailComponent },
  { path: 'handcrafters', component: HandcraftersComponent },
  { path: 'user/:id', component: UserPageComponent } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), NgbModule.forRoot()],
  bootstrap: [AppComponent],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}