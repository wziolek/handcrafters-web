import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Handcrafter } from './handcrafter';
import { HC } from './mock-handcrafters';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HandcrafterService {
 
  constructor(private messageService: MessageService) { }
 
  getHandcrafters(): Observable<Handcrafter[]> {
    // TODO: send the message _after_ fetching the Handcrafters
    this.messageService.add('HandcrafterService: fetched handcrafters');
    return of(HC);
  }

	getHandcrafter(id: number): Observable<Handcrafter> {
    // TODO: send the message _after_ fetching the Handcrafter
    this.messageService.add(`HandcrafterService: fetched handcrafter id=${id}`);
    return of(HC.find(handcrafter => handcrafter.id === id));
  }

  getHandcrafterByLogin(login: string): Observable<Handcrafter> {
    this.messageService.add(`HandcrafterService: fetched handcrafter login=${login}`);
    return of(HC.find(handcrafter => handcrafter.login === login));
  }
}