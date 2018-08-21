import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Handcrafter } from './handcrafter';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HandcrafterService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient) {}

  private handcraftersUrl = 'https://api.handcrafters.piatkiewicz.com/handcrafters';  // URL to web api
 

  /** Log a HandcrafterService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HandcrafterService: ${message}');
  }
  
  getCurrentUser(): Observable<Handcrafter> {
    var current_user = 1;
    const url = `${this.handcraftersUrl}/${current_user}`;
    return this.http.get<Handcrafter>(url).pipe(
      tap(_ => this.log(`fetched handcrafter id=${current_user}`)),
      catchError(this.handleError<Handcrafter>(`getHandcrafter id=${current_user}`))
    ); 
  }


  /** GET handcrafteres from the server */
  getHandcrafters(): Observable<Handcrafter[]> {
    return this.http.get<Handcrafter[]>(this.handcraftersUrl)
      .pipe(
        tap(handcrafters => this.log('fetched handcrafters')),
        catchError(this.handleError('getHandcrafters', []))
      );
  }

  /** GET handcrafter by id. Return `undefined` when id not found */
  getHandcrafterNo404<Data>(id: number): Observable<Handcrafter> {
    const url = `${this.handcraftersUrl}/?id=${id}`;
    return this.http.get<Handcrafter[]>(url)
      .pipe(
        map(handcrafteres => handcrafteres[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} handcrafter id=${id}`);
        }),
        catchError(this.handleError<Handcrafter>(`getHandcrafter id=${id}`))
      );
  }

  /* GET handcrafteres whose name contains search term */
  searchHandcrafteres(term: string): Observable<Handcrafter[]> {
    if (!term.trim()) {
      // if not search term, return empty handcrafter array.
      return of([]);
    }
    return this.http.get<Handcrafter[]>(`${this.handcraftersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found handcrafteres matching "${term}"`)),
      catchError(this.handleError<Handcrafter[]>('searchHandcrafteres', []))
    );
  }

  /** GET handcrafter by id. Will 404 if id not found */
  getHandcrafter(id: number): Observable<Handcrafter> {
    const url = `${this.handcraftersUrl}/${id}`;
    return this.http.get<Handcrafter>(url).pipe(
      tap(_ => this.log(`fetched handcrafter id=${id}`)),
      catchError(this.handleError<Handcrafter>(`getHandcrafter id=${id}`))
    );
  }


  //////// Save methods //////////
 
  /** POST: add a new handcrafter to the server */
  addHandcrafter (handcrafter: Handcrafter): Observable<Handcrafter> {
    return this.http.post<Handcrafter>(this.handcraftersUrl, handcrafter, httpOptions).pipe(
      tap((handcrafter: Handcrafter) => this.log(`added handcrafter w/ id=${handcrafter.id}`)),
      catchError(this.handleError<Handcrafter>('addHandcrafter'))
    );
  }

  addHandcrafterBase (handcrafter: Handcrafter): Observable<HttpResponse<Handcrafter>> {
    // const body = new HttpParams()
    //   .set('name', handcrafter.name)
    //   .set('surname', handcrafter.surname)
    //   .set('login', handcrafter.login)
    //   .set('email', handcrafter.email)
    //   .set('password', handcrafter.password)
    //   .set('city', handcrafter.city)
    //   .set('avatar_url', handcrafter.avatar_url)
    //   .set('birthday', handcrafter.birthday)
    //   .set('description', handcrafter.description)
    //   .set('elsewhere', handcrafter.elsewhere)
    //   .set('skills', handcrafter.skills.toString());
    const body = new HttpParams()
      .set('login', handcrafter.login)
      .set('email', handcrafter.email)
      .set('password', handcrafter.password);

    let httpHeaders = new HttpHeaders()
       .set('Content-Type', 'application/x-www-form-urlencoded')

    return this.http.post<Handcrafter>(this.handcraftersUrl,
                                body.toString(),
                                {
                                  headers: httpHeaders,
                                  observe: 'response',
                                  responseType: 'json'
                                }
           );
  }

  createHandcrafter(handcrafter: Handcrafter): any{
    var ret: any[];
    let newhandcrafter: Handcrafter;
    return this.addHandcrafterBase(handcrafter)
    // .subscribe(
    //   hand => {
    //     newhandcrafter = hand.body;
    //     ret.push(newhandcrafter);
    //   },
    //   err => {
    //     console.log(err);
    //     //ret.push(['error', err]);
    //   }
    // );
    //return newhandcrafter;
  } 
 
  /** DELETE: delete the handcrafter from the server */
  deleteHandcrafter (handcrafter: Handcrafter | number): Observable<Handcrafter> {
    const id = typeof handcrafter === 'number' ? handcrafter : handcrafter.id;
    const url = `${this.handcraftersUrl}/${id}`;
 
    return this.http.delete<Handcrafter>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted handcrafter id=${id}`)),
      catchError(this.handleError<Handcrafter>('deleteHandcrafter'))
    );
  }
 
  /** PUT: update the handcrafter on the server */
  updateHandcrafter (handcrafter: Handcrafter): Observable<any> {
    console.log("saving");
    return this.http.put(this.handcraftersUrl, handcrafter, httpOptions).pipe(
      tap(_ => this.log(`updated handcrafter id=${handcrafter.id}`)),
      catchError(this.handleError<any>('updateHandcrafter'))
    );
  }
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
