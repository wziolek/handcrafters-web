import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Shot } from './shot';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ShotService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient) {}

  private shotsUrl = 'https://api.handcrafters.piatkiewicz.com/shots';  // URL to web api
 

  /** Log a ShotService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ShotService: ${message}');
  }

  /** GET shotes from the server */
  getShots(): Observable<Shot[]> {
    return this.http.get<Shot[]>(this.shotsUrl)
      .pipe(
        tap(shots => this.log('fetched shots')),
        catchError(this.handleError('getShots', []))
      );
  }

  /** GET shot by id. Return `undefined` when id not found */
  getShotNo404<Data>(id: number): Observable<Shot> {
    const url = `${this.shotsUrl}/?id=${id}`;
    return this.http.get<Shot[]>(url)
      .pipe(
        map(shotes => shotes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} shot id=${id}`);
        }),
        catchError(this.handleError<Shot>(`getShot id=${id}`))
      );
  }

  /* GET shotes whose name contains search term */
  searchShotes(term: string): Observable<Shot[]> {
    if (!term.trim()) {
      // if not search term, return empty shot array.
      return of([]);
    }
    return this.http.get<Shot[]>(`${this.shotsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found shotes matching "${term}"`)),
      catchError(this.handleError<Shot[]>('searchShotes', []))
    );
  }

  /** GET shot by id. Will 404 if id not found */
  getShot(id: number): Observable<Shot> {
    const url = `${this.shotsUrl}/${id}`;
    return this.http.get<Shot>(url).pipe(
      tap(_ => this.log(`fetched shot id=${id}`)),
      catchError(this.handleError<Shot>(`getShot id=${id}`))
    );
  }


  //////// Save methods //////////

  /** POST: add a new shot to the server */ 
  addShotBase (shot: Shot): Observable<HttpResponse<Shot>> {
    const body = new HttpParams()
       .set('name', shot.name)
       .set('description', shot.description)
       .set('image_url', shot.image_url);

    let httpHeaders = new HttpHeaders()
       .set('Content-Type', 'application/x-www-form-urlencoded')

    return this.http.post<Shot>(this.shotsUrl,
                                body.toString(),
                                {
                                  headers: httpHeaders,
                                  observe: 'response',
                                  responseType: 'json'
                                }
           );
  }

  addShot(shot: Shot): Shot{
    let newshot: Shot;
    this.addShotBase(shot).subscribe(
      shot => {
        newshot = shot.body;
      },
      err => {
        console.log(err);
      }
    );
    return newshot;
  } 

  /** DELETE: delete the shot from the server */
  deleteShot (shot: Shot | number): Observable<Shot> {
    const id = typeof shot === 'number' ? shot : shot.id;
    const url = `${this.shotsUrl}/${id}`;
 
    return this.http.delete<Shot>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted shot id=${id}`)),
      catchError(this.handleError<Shot>('deleteShot'))
    );
  }
 
  /** PUT: update the shot on the server */
  updateShot (shot: Shot): Observable<any> {
    return this.http.put(this.shotsUrl, shot, httpOptions).pipe(
      tap(_ => this.log(`updated shot id=${shot.id}`)),
      catchError(this.handleError<any>('updateShot'))
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
