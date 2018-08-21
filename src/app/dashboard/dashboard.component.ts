
import { Component, OnInit } from '@angular/core';
import { Shot } from '../shot';
import { ShotService } from '../shot.service';
import { ShotDetailComponent} from '../shot-detail/shot-detail.component';
//import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  shots: Shot[] = [];
 
  constructor(private shotService: ShotService) {}

 
  ngOnInit() {
    this.getShots();
  }
 
  getShots(): void {
    this.shotService.getShots()
      .subscribe(shots => this.shots = shots.slice(0, 30));
  }

  // openDialog(id: number) {
  //   let shot_tmp: Shot;
  //   this.shotService.getShot(id)
  //      .subscribe(shot => shot_tmp = shot);
  //   const dialogRef = this.dialog.open(ShotDetailComponent, {
  //     height: '400px',
  //     width: '600px',
  //     data: {
  //       shot: shot_tmp
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}