import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	// TODO: temporary ugly hack
    types = ['Popular', 'Recent', 'Most viewed', 'Most Comented']
	current_user = 11;
  	title = 'handcrafters';
    type = 'Popular';
    sort = 'Shots';
    time = 'Now';
}
