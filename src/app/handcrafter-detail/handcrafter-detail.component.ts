import { Component, OnInit, Input } from '@angular/core';
import { Handcrafter } from '../handcrafter';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HandcrafterService }  from '../handcrafter.service';


@Component({
  selector: 'app-handcrafter-detail',
  templateUrl: './handcrafter-detail.component.html',
  styleUrls: ['./handcrafter-detail.component.css']
})
export class HandcrafterDetailComponent implements OnInit {
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
    const id = +this.route.snapshot.paramMap.get('id');  	
    this.handcrafterService.getHandcrafter(id)
    .subscribe(handcrafter => this.handcrafter = handcrafter);
  }

  goBack(): void {
    this.location.back();
  }
}