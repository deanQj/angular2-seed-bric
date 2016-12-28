import { Injectable } from '@angular/core';
import { Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IF_result } from './interface';
import { MainService } from './main.service'

import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * 接口 - 资源单
 */
@Injectable()
export class ResourceService extends MainService {

  /**
   * Creates a new NameListService with the injected Jsonp.
   * @param {Jsonp} public jsonp [description]
   * @constructor
   */
  constructor(public jsonp: Jsonp) {
    super(jsonp);
  }

  /**
   * 接口-获取城市
   * @return {Observable<IF_result>} [description]
   */
  getResourceData(): Observable<IF_result> {
    let url = this.$API+'ajaxs/getResourceData';
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
    let url = this.$API+'ajaxs/getResourceList';
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
   * 接口-根据id获取资源单信息
   * @return {Observable<IF_result>} [description]
   */
  getResourcesReview(id: any): Observable<IF_result> {
    let url = this.$API+'ajaxs/getResourcesReview';
    var params = new URLSearchParams();
    params.set('id', id);
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(url, { search: params })
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

}

