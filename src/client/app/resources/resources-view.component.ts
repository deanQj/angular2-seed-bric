import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IF_result } from '../shared/index';
import { ResourceService } from '../shared/api/resource.service';

import 'rxjs/add/operator/switchMap';

/**
 * 环境声明
 * @type {any}
 */
declare var $:any;


/**
 * This class represents the lazy loaded ResourcesComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-resources',
  templateUrl: 'resources-view.component.html',
  styleUrls: ['resources-view.component.css'],
})
export class ResourcesViewComponent implements OnInit {

  /**
   * 属性
   */
  errorMessage: string;
  resourcesView: any[] = [];


  /**
   * 构造函数 - 创建服务的实例
   * @param {ResourceService} public resourceService [description]
   */
  constructor(
    private resourceService: ResourceService,
    private route: ActivatedRoute
  ) {}


  /**
   * 初始化
   */
  ngOnInit() {
    this.getResourcesReview();
  }


  /**
   * 获取产品类型和地区
   */
  getResourcesReview() {
    var self = this;

    this.route.params
      .switchMap( (params: Params) => this.resourceService.getResourcesReview(+params['id']) )
      .subscribe(
        result => {

          if (result.success == "0") {

            for (let value of result.data.ResourceInfo.content) {
                self.resourcesView.push(value);
            }
            self.renderTable();

          } else {
            self.errorMessage = result.message;
            alert(result.message);
          }

        },
        error =>  this.errorMessage = <any>error
      );

    
  }


  /**
   * 获取产品类型和地区
   */
  renderTable() {
    var self = this;
    setTimeout( () => {
        var td_count=0;
        var is_first=0;
        $.each($(".resource-content tr"),function(i:any,n:any){
            if($(this).find('td').length>td_count){
                td_count=$(this).find('td').length;
            }
        });
        $.each($(".resource-content tr"),function(i:any,n:any){
            if($(this).find('td').length==1){
                $(this).find('td').attr('colspan',td_count);
                $(this).find('td').css({'font-size':'18px','font-weight':'bold','height':'30px'});
            }
            if($(this).find('td').length==td_count&&is_first==0){
                $(this).find('td').css({'font-size':'14px','font-weight':'bold','height':'25px'});
                is_first=1;
            }
        });
    });
  }

}
