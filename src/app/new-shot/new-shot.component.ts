import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShotService }  from '../shot.service';
import { Shot } from '../shot';
import { FileSelectDirective, FileUploader, FileUploadModule } from 'ng2-file-upload';
import { FileService } from '../file.service';

const uri = 'http://localhost:4200/file/upload';

@Component({
  selector: 'app-new-shot',
  templateUrl: './new-shot.component.html',
  styleUrls: ['./new-shot.component.css'],
  providers: [FileService],
})
export class NewShotComponent implements OnInit {
	@Input() shot: Shot;

    uploader: FileUploader = new FileUploader({url:uri});

    attachmentList: any = [];

	constructor(
	  private route: ActivatedRoute,
	  private shotService: ShotService,
	  private location: Location,
      private _fileService: FileService
	 ){}

	submitted = false;

	onSubmit(name: string, url: string, description: string) {
        //console.log(url);
        this.shot = this.shotService.addShot({"name": name, "image_url": url, "description": description} as Shot);
        this.submitted = true;
    }

	newShot() {}

  	ngOnInit() {}
}
