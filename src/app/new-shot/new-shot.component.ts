import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShotService }  from '../shot.service';
import { Shot } from '../shot';

@Component({
  selector: 'app-new-shot',
  templateUrl: './new-shot.component.html',
  styleUrls: ['./new-shot.component.css'],
})
export class NewShotComponent implements OnInit {
	@Input() shot: Shot;


    attachmentList:any = [];

	constructor(
	  private route: ActivatedRoute,
	  private shotService: ShotService,
	  private location: Location,
	 ){}

	submitted = false;

	onSubmit(name: string, url: string, description: string) {
        this.shot = this.shotService.addShot({"name": name, "image_url": url, "description": description} as Shot);
        this.submitted = true;
    }

	newShot() {}

  	ngOnInit() {}
}
