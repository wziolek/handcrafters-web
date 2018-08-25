import { Component, OnInit, Input } from '@angular/core';
import { Handcrafter } from '../handcrafter';
import { ShotService } from '../shot.service';

@Component({
  selector: 'app-handcrafter-detail-shots',
  templateUrl: './handcrafter-detail-shots.component.html',
  styleUrls: ['./handcrafter-detail-shots.component.css']
})
export class HandcrafterDetailShotsComponent implements OnInit {
  @Input() handcrafter: Handcrafter;

  constructor(private shotService: ShotService) { }

  ngOnInit() {}

  delete(id:number) {
      this.shotService.deleteShot(id).subscribe();
  }  

}
