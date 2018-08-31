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
        var ret: any[];
        this.handcrafterService.createHandcrafter(
          {"id": undefined,
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
           "skills": [skills]} as Handcrafter);
  }

  ngOnInit() {
  }

}
