import { Component, OnInit } from '@angular/core';
import { Handcrafter } from '../handcrafter';
import { HandcrafterService} from '../handcrafter.service';

@Component({
  selector: 'app-handcrafters',
  templateUrl: './handcrafters.component.html',
  styleUrls: ['./handcrafters.component.css']
  
})


export class HandcraftersComponent implements OnInit {
  handcrafters: Handcrafter[];

  constructor(private handcrafterService: HandcrafterService) { }

  ngOnInit() {
    this.getHandcrafters();
  }

  getHandcrafters(): void {
    this.handcrafterService.getHandcrafters()
    .subscribe(handcrafters => this.handcrafters = handcrafters);
  }
}


