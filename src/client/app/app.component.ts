import { Component, OnInit } from '@angular/core';
import { Config } from './shared/index';
import './operators';

import { WeixinService } from './shared/api/weixin.service';

/**
 * 环境声明
 * @type {any}
 */
declare var wx:any;

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

  constructor( public weixinService: WeixinService ) {
    console.log('Environment config', Config);
  }

  ngOnInit() {
    this.getWechatToken();
  }

  /**
   * 注入微信公众号信息
   */
  getWechatToken() {
    this.weixinService.getWechatToken()
    .subscribe(
        result => { 
          // console.log(result)
          wx.config({
              debug: false,
              appId: result.data.appId,
              timestamp: result.data.time,
              nonceStr: result.data.noncestr,
              signature: result.data.sign,
              jsApiList: [
                  'checkJsApi',
                  'onMenuShareTimeline',
                  'onMenuShareAppMessage',
                  'onMenuShareQQ'
              ]
          });
        }
      );
  }

}
