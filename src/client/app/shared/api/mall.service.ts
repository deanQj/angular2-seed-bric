import { Injectable } from '@angular/core';
import { Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IF_result } from './interface';
import { MainService } from './main.service'

import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * 接口 - mall
 */
@Injectable()
export class MallService extends MainService {

  /**
   * Creates a new NameListService with the injected Jsonp.
   * @param {Jsonp} private jsonp [description]
   * @constructor
   */
  constructor(public jsonp: Jsonp) {
    super(jsonp);
  }

  /**
   * 接口-委托找货
   * @return {Observable<IF_result>} [description]
   */
  saveMessage(data: any): Observable<IF_result> {
    let url = this.$API+'api4_malls/saveMessage';
    var params = new URLSearchParams();
    params.set('phone', data.phone);
    params.set('content', data.content);
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(url, { search: params })
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

}

