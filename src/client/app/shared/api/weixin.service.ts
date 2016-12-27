import { Injectable } from '@angular/core';
import { Response, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IF_result } from './interface';
import { MainService } from './main.service'

import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * 接口 - 微信
 */
@Injectable()
export class WeixinService extends MainService {

  /**
   * Creates a new NameListService with the injected Jsonp.
   * @param {Jsonp} public jsonp [description]
   * @constructor
   */
  constructor(public jsonp: Jsonp) {
    super(jsonp);
  }

  /**
   * 接口-获取微信公众号信息
   * @return {Observable<IF_result>} [description]
   */
  getWechatToken(): Observable<IF_result> {
    let url = this.$API+'ajaxs/getWechatToken';
    var params = new URLSearchParams();
    params.set('type', '2');
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(url, { search: params })
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  /**
   * 接口-用户注册（微信端）
   * @return {Observable<IF_result>} [description]
   */
  weChatRegister(data:any): Observable<IF_result> {
    let url = this.$API+'Api4Wechats/weChatRegister';
    var params = new URLSearchParams();
    params.set('username', data.username);
    params.set('mobile_code', data.mobile_code);
    params.set('openid', data.openid);
    params.set('company_name', data.company_name);
    params.set('realname', data.realname);
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(url, { search: params })
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  /**
   * 接口-微信端注册后朋友圈分享成功的回调函数
   * @return {Observable<IF_result>} [description]
   */
  shareSuccessBack(data:any): Observable<IF_result> {
    let url = this.$API+'Api4Wechats/shareSuccessBack';
    var params = new URLSearchParams();
    params.set('userid', data.userid);
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp.get(url, { search: params })
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

}

