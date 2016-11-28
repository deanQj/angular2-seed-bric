import { Component, OnInit } from '@angular/core';
import { IF_result } from '../shared/index';
import { ResourceService } from '../shared/api/resource.service';

/**
 * 环境声明
 * @type {any}
 */
declare var $:any;

/**
 * interface - 资源单
 */
interface IF_resources {
  isLoader : boolean;
  isLast : boolean;
  page : number;
  limit : number;
  total: number;
  cityid : string;
  adjusting : string;
  created : string;
  category : string;
  keyword : string;
  result : any[];
}


/**
 * This class represents the lazy loaded ResourcesComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-resources',
  templateUrl: 'resources.component.html',
  styleUrls: ['resources.component.css'],
  // providers: [ MobiscrollDirective ],
  // directives: [ MobiscrollDirective ] 
})
export class ResourcesComponent implements OnInit {

  /**
   * 属性
   */
  errorMessage: string;
  Categorys:any[] = [{id: 0,name: "全部",sortname: ""}];
  Citys:any[] = [{id:0,name:'全部地区'}];
  IsWeiXin: boolean = false;
  Resources:IF_resources = {
      isLoader : true,
      isLast : false,
      page : 1,
      limit : 6,
      total: 0,
      cityid : "",
      adjusting : "0",
      created : "0",
      category : "",
      keyword : "",
      result : []
  };


  /**
   * 构造函数 - 创建服务的实例
   * @param {ResourceService} public resourceService [description]
   */
  constructor(
    public resourceService: ResourceService
  ) {}


  /**
   * 初始化
   */
  ngOnInit() {
    $('#Resources').css({
      'min-height' : $(window).height()
    });

    this.getResourceData();
    this.getResourceList();
  }


  /**
   * 获取产品类型和地区
   */
  getResourceData() {
    this.resourceService.getResourceData()
      .subscribe(
        result => { 
            // console.log(result);
          if (result.success == "0") {

            for (var key of Object.keys(result.data.cities)) {
              this.Citys.push({
                id: key,
                name: result.data.cities[key]
              });
            }

            for (var key of Object.keys(result.data.categories)) {
              this.Categorys.push(result.data.categories[key]);
            }

          }
        },
        error =>  this.errorMessage = <any>error
      );
  }


  /**
   * 获取资源单列表
   */
  getResourceList(isGetMore: boolean = false) {
    if(!isGetMore){
        this.Resources.result = [];
        this.Resources.page = 1;
    }

    this.Resources.isLoader = true;

  console.log(this.Resources)
    this.resourceService.getResourceList(this.Resources)
      .subscribe(
        result => { 
          // console.log(result); 

           if (result.success == "0") {
              this.Resources.total = Math.ceil(result.data.count / this.Resources.limit) ;
              if(!isGetMore){
                  for (let value of result.data.Respurces) {
                      value.isMarquee = (this.realLength(value.description)*19) > (window.innerWidth-145);
                  }

                  this.Resources.result = result.data.Respurces;
              }else{
                  for (let value of result.data.Respurces) {
                      value.isMarquee = (this.realLength(value.description)*19) > (window.innerWidth-145);
                      this.Resources.result.push(value);
                  }
              }

              this.Resources.isLoader = false;
              this.Resources.isLast = (this.Resources.page >= this.Resources.total);

              if (this.Resources.result.length > 0) {
                this.renderScroll();
              }
          } else {
             alert(result.message);
          }

          // console.log(this.Resources)
        },
      );
  }


  /**
   * 字符串真实长度
   * @param  {any}    str [description]
   * @return {number}     [description]
   */
  realLength(str:any): number {
    var L=0.0;
    for(var i in str){
        L+=(str.charCodeAt(i)>255)?1.0:0.5;
    }
    return Math.ceil(L);
  }


  /**
   * 搜索框 清除文本 事件
   * @param {any} e [description]
   */
  seachTextClear(e:any) {
    e.stopPropagation();
    this.Resources.category = "";
  }


  /**
   * 搜索框 focus 事件
   * @param {any} e [description]
   */
  seachTextFocus(e:any) {
    $(e.target).parent().animate({width:"192px"},'fast');
  }


  /**
   * 搜索框 blur 事件
   * @param {any} e [description]
   */
  seachTextBlur(e:any) {
    $(e.target).parent().animate({width:"100px"},'fast');
    setTimeout(()=> {
      if ($.trim(this.Resources.category) == "") {
        this.Resources.category = "";
      }
      this.getResourceList();
    },300);
  }


  /**
   * 排序&条件变更 事件
   * @param {boolean = false} type [description]
   */
  changeList(type:boolean = false) {
    if (type) {
      this.Resources.created = "0";
      this.Resources.adjusting = "0";
      $('#sel-default').mobiscroll('clear');
      $('#sel-date').mobiscroll('clear');
    }
    this.getResourceList();
  }


  /**
   * 获取更多资源单
   */
  getMoreList() {
    this.Resources.page+=1;
    this.getResourceList(true);
  }


  renderScroll() {
    setTimeout(()=> {
      let intervalScroll: any[] = [];
      $('.main_product').each(function(i:any,item:any) {
          if ($(item).find('p').length > 1) {
            intervalScroll[i] = setInterval(function() {
              var $firstP = $(item).find('p:first'),
                  height = $firstP.height();
              $firstP.animate({
                height:0
              },1000,'swing',function() {
                $firstP.height(height);
                $(item).append($firstP.clone());
                $firstP.remove();
              })
            }, 3000);
          }
      });

      let scrollMarquee: any[] = [];
      $('.marquee span:not(.active)').each(function(i:any,item:any){
          $(item).addClass('active');
          var spanwidth = $(item).get(0).offsetWidth,
              pWidth = $(item).parent().width(),
              left = -18;

          scrollMarquee[i] = setInterval(function(){
              if (left <= spanwidth) {
                  left+=2;
                  $(item).css('left',-left);
              } else {
                  $(item).css('left',pWidth);
                  left= -pWidth;
              }
          },50)
      });
    },300);
  }


}
