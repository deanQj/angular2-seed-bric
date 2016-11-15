import { Component, OnInit } from '@angular/core';
import { IF_result } from '../shared/index';
import { ResourceService } from '../shared/api/resource.service';

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
  // providers: [ Jsonp ],
})
export class ResourcesComponent implements OnInit {

  /**
   * 属性
   */
  errorMessage: string;
  Categorys:any[] = [{id: 0,name: "全部",sortname: ""}];
  Citys:any[] = [{id:0,name:'全部地区'}];
  isSearch: boolean = true;
  Resources:IF_resources = {
      isLoader : false,
      isLast : false,
      page : 1,
      limit : 6,
      total: 0,
      cityid : "",
      adjusting : "",
      created : "",
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
              this.Citys.push(result.data.cities[key]);
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
  getResourceList() {
    this.resourceService.getResourceList()
      .subscribe(
        result => { 
          // console.log(result); 

           if (result.success == "0") {
              this.Resources.total = result.data.count / this.Resources.limit;
              if(this.isSearch){
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
              this.Resources.isLast = (this.Resources.page >= result.data.page);

              if (this.Resources.result.length > 0) {
                  // $scope.renderScroll();
              }
          } else {
             alert(result.message);
          }

          console.log(this.Resources)
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

}
