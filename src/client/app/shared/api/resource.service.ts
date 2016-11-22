import { Injectable } from '@angular/core';
import { Response, Jsonp, URLSearchParams } from '@angular/http';
import { IF_result } from './interface';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * 接口 - 资源单
 */
@Injectable()
export class ResourceService {

  /**
   * Creates a new NameListService with the injected Jsonp.
   * @param {Jsonp} private jsonp [description]
   * @constructor
   */
  constructor(private jsonp: Jsonp) {}

  /**
   * 接口-获取城市
   * @return {Observable<IF_result>} [description]
   */
  getResourceData(): Observable<IF_result> {
    let url = 'http://www.16988.com/ajaxs/getResourceData';
    var params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(url, { search: params })
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  /**
   * 接口-获取所有资源列表
   * @return {Observable<IF_result>} [description]
   */
  getResourceList(data: any): Observable<IF_result> {
    let url = 'http://www.16988.com/ajaxs/getResourceList';
    var params = new URLSearchParams();
    params.set('limit', '6');
    params.set('page', data.page);
    params.set('city_id', data.cityid);
    params.set('adjusting', data.adjusting);
    params.set('created', data.created);
    params.set('category', data.category);
    params.set('keyword', data.keyword);
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(url, { search: params })
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }


  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

