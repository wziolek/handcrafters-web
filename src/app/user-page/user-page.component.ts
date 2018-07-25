// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Handcrafter } from '../handcrafter';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HandcrafterService }  from '../handcrafter.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  @Input() handcrafter: Handcrafter;

  constructor(
  private route: ActivatedRoute,
  private handcrafterService: HandcrafterService,
  private location: Location
  ){}

  ngOnInit() {
  	this.getHandcrafter();
  }

  getHandcrafter(): void {
    let login = +this.route.snapshot.paramMap.get('id');
    console.log('login:' + login);	
    this.handcrafterService.getHandcrafter(login)
    .subscribe(handcrafter => this.handcrafter = handcrafter);
  }

  goBack(): void {
    this.location.back();
  }
}