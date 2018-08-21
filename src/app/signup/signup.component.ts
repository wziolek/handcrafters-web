import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HandcrafterService }  from '../handcrafter.service';
import { Handcrafter } from '../handcrafter'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Input() handcrafter: Handcrafter;
  @Input() message = {type: '', messages: []};

  constructor(
      private route: ActivatedRoute,
      private handcrafterService: HandcrafterService,
      private location: Location
  ) { }

  submitted = false;

  onSubmit(name: string, surname: string, login: string, email: string, 
           password: string, password2: string, city: string, avatar: string, 
           birthday: string, description: string, elswhere: string, skills: string) {
        //console.log({"name": name, "image_url": url, "description": description} as Shot);
        //this.shotService.addShot({"name": name, "image_url": url, "description": description} as Shot);
        var ret: any[];
        this.handcrafterService.createHandcrafter(
          {"id": 0,
           "name": name, 
           "surname": surname, 
           "login": login,
           "email": email,
           "password": password,
           "city": city,
           "avatar_url": avatar,
           "birthday": birthday, 
           "description":description,
           "elswhere": elswhere,
           "skills": [skills]} as Handcrafter).subscribe(
              hand => {
                this.handcrafter = hand.body;
              },
              err => {
                this.message = {
                  type: 'error',
                  messages: err['error']['messages']
                };
                console.log(err);
                //ret.push(['error', err]);
              }
            );
        // .pipe(
        //      (data: any) => this.message = {
        //        type: data[1],
        //        messages: data[1]}
        //   );
        // this.handcrafter = ret[0];
        // this.message = ret[1];
        //console.log(this.message);
        // if(ret[1][0] != 'error'){
        //   this.submitted = true;
        // }
  }

  ngOnInit() {
  }

}
