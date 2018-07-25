
import { Component, OnInit } from '@angular/core';
import { Handcrafter } from '../handcrafter';
import { HandcrafterService } from '../handcrafter.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  handcrafters: Handcrafter[] = [];
 
  constructor(private handcrafterService: HandcrafterService) { }
 
  ngOnInit() {
    this.getHandcrafters();
  }
 
  getHandcrafters(): void {
    this.handcrafterService.getHandcrafters()
      .subscribe(handcrafters => this.handcrafters = handcrafters.slice(1, 21));
  }
}