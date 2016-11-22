import { Component, OnInit } from '@angular/core';

/**
 * 环境声明
 * @type {any}
 */
declare var Swiper:any;
declare var wx:any;


/**
 * This class represents the lazy loaded IndexComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-resources',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css'],
  // providers: [ Jsonp ],
})
export class IndexComponent implements OnInit {


  /**
   * 构造函数 - 创建服务的实例
   */
  constructor() {}


  /**
   * 初始化
   */
  ngOnInit() {
    this.initSwiper();
    this.onWeixin();      
  }


  /**
   * 初始号轮播图
   */
  initSwiper() {
    let mySwiper = new Swiper('.swiper-container',{
        loop: true,
        autoplay: 6000,
        pagination : '.swiper-pagination'
    });
  }


  /**
   * 微信分享
   */
  onWeixin() {
    wx.ready(function () {

      wx.checkJsApi({
          jsApiList: [
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ'
          ],
          success: function () {
          },
          error : function() {
          }
      });

      // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
      wx.onMenuShareAppMessage({
          title: "农产品集购网16988-大宗农产品_白糖_豆油交易电商平台", // 分享标题
          desc: "农产品集购网-全国大宗农产品交易中心；免费资源发布，采购对接；18000家商家入驻；", // 分享描述
          link: 'm.16988.com', // 分享链接
          imgUrl: 'https://mmbiz.qlogo.cn/mmbiz/L3nicCjtRYcuCCU8LUiajLCdr2ThoguuxDKpwsk7vI8SFGn0G0dYic46LQuZjzqEw9y8QkLzZ2nhA9grKiaTOOHiajQ/0?wx_fmt=png', // 分享图标
          success: function () {
          },
          cancel: function () {
          }
      });

      // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
      wx.onMenuShareTimeline({
          title: "农产品集购网16988-大宗农产品_白糖_豆油交易电商平台",
          link: 'm.16988.com',
          imgUrl: 'https://mmbiz.qlogo.cn/mmbiz/L3nicCjtRYcuCCU8LUiajLCdr2ThoguuxDKpwsk7vI8SFGn0G0dYic46LQuZjzqEw9y8QkLzZ2nhA9grKiaTOOHiajQ/0?wx_fmt=png',
          success: function () {
          },
          cancel: function () {
          }
      });

      // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
      wx.onMenuShareQQ({
          title: "农产品集购网16988-大宗农产品_白糖_豆油交易电商平台", // 分享标题
          desc: "农产品集购网-全国大宗农产品交易中心；免费资源发布，采购对接；18000家商家入驻；", // 分享描述
          link: 'm.16988.com', // 分享链接
          imgUrl: 'https://mmbiz.qlogo.cn/mmbiz/L3nicCjtRYcuCCU8LUiajLCdr2ThoguuxDKpwsk7vI8SFGn0G0dYic46LQuZjzqEw9y8QkLzZ2nhA9grKiaTOOHiajQ/0?wx_fmt=png', // 分享图标
          success: function () {
          },
          cancel: function () {
          }
      });

    });
  }
 

}
