import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Shot } from '../shot';
import { Handcrafter } from '../handcrafter';
import { HandcrafterService } from '../handcrafter.service';
import { ShotService } from '../shot.service';
// import {MAT_DIALOG_DATA} from '@angular/material';
// import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-shot-detail',
  templateUrl: './shot-detail.component.html',
  styleUrls: ['./shot-detail.component.css']
})
export class ShotDetailComponent  {
  @Input() shot: Shot;
  @Input() handcrafter: Handcrafter;

  constructor(
    private shotService: ShotService,
    private handcrafterService: HandcrafterService,
    private route: ActivatedRoute,
    private location: Location) {}
 
  ngOnInit() {
    this.getShot();
  }
 
  getShot(): void {
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.shotService.getShot(id)
      .subscribe(shot => this.shot = shot);
    console.log(this.shot);
    this.handcrafterService.getHandcrafter(this.shot.user_id)
      .subscribe(handcrafter => this.handcrafter = handcrafter);
  }

  goBack(): void {
    this.location.back();
  }
}
