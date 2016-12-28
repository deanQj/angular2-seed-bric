import { Injectable } from '@angular/core';
import { Response, Jsonp, URLSearchParams } from '@angular/http';
import { IF_result } from './interface';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * 接口 - 主
 */
@Injectable()
export class MainService {

  $API:string = "http://www.16988.com/";

  /**
   * Creates a new NameListService with the injected Jsonp.
   * @param {Jsonp} private jsonp [description]
   * @constructor
   */
  constructor(public jsonp: Jsonp) {}


  /**
    * Handle HTTP error
    */
  public handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

