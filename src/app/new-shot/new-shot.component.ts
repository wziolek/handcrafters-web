import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShotService }  from '../shot.service';
import { Shot } from '../shot'

@Component({
  selector: 'app-new-shot',
  templateUrl: './new-shot.component.html',
  styleUrls: ['./new-shot.component.css']
})

export class NewShotComponent implements OnInit {
	@Input() shot: Shot;

	constructor(
	  private route: ActivatedRoute,
	  private shotService: ShotService,
	  private location: Location
	 ){}
 
	model = new Shot(18, 'Test name', '/', 'test description');

	submitted = false;

	onSubmit() { this.submitted = true; console.log(this.model);}

	newShot() {
		this.model = new Shot(42, '', '', '',);
	}

  	ngOnInit() {
    	this.getShot();
  	}

	getShot(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.shotService.getShot(id)
			.subscribe(shot => this.shot = shot);
	}

}
