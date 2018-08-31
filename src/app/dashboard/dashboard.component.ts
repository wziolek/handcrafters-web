import { Component, OnInit } from '@angular/core';
import { Shot } from '../shot';
import { ShotService } from '../shot.service';
import { ShotDetailComponent} from '../shot-detail/shot-detail.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  shots: Shot[] = [];
 
  constructor(private shotService: ShotService, private authService: AuthService) {}

 
  ngOnInit() {
    this.getShots();
  }
 
  getShots(): void {
    this.shotService.getShots()
      .subscribe(shots => this.shots = shots.slice(0, 30));
  }
}
