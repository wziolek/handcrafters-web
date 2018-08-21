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
  @Input() user: Handcrafter;
  settingsPage:number;

  constructor(
  private route: ActivatedRoute,
  private handcrafterService: HandcrafterService,
  private location: Location,
  ){
  }

  submitted = false;

  ngOnInit() {
  	this.getCurrentUser();
  }

  changeSettingsPage(page: number){
    this.settingsPage= page;
  }

  getCurrentUser(): void {
    this.handcrafterService.getCurrentUser().subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.handcrafterService.updateHandcrafter(this.user);
    //this.submitted = true;
      //.subscribe(() => this.goBack());
  }
}
