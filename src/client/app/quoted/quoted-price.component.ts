import { Component, OnInit } from '@angular/core';

/**
 * 环境声明
 * @type {any}
 */
declare var $:any;

/**
 * interface - 委托找货
 */
interface IF_QuotedPrice {
  phone : string;
  content : string;
  sel: string;
}


/**
 * This class represents the lazy loaded IndexComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-resources',
  templateUrl: 'quoted-price.component.html',
  styleUrls: ['quoted-price.component.css'],
  // providers: [ Jsonp ],
})
export class QuotedPriceComponent implements OnInit {

  /**
   * 属性
   */
  IsWeiXin: boolean = false;
  footState: boolean = false;
  QuotedPrice: IF_QuotedPrice = {
    phone : '',
    content: '',
    sel: '1'
  };
  submitted: boolean = false;
  documentMinHeight: string;


  /**
   * 构造函数 - 创建服务的实例
   */
  constructor() {}


  /**
   * 初始化
   */
  ngOnInit() {
    this.documentMinHeight = window.document.body.offsetHeight + 'px';
  }


  onSubmit() { 
    this.submitted = true; 
  }

  text($event: any) {
    console.log($event)
  }

  
 

}
