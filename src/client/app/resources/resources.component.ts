import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { ResourceService } from '../shared/api/resource.service';

// import { Jsonp } from '@angular/http';

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

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  resources: any[] = [];
  Categorys:any[] = [{id: 0,name: "全部",sortname: ""}];
  Citys:any[] = [{id:0,name:'全部地区'}];

  ResourceList = {
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
   * Creates an instance of the ResourcesComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(
    public nameListService: NameListService,
    public resourceService: ResourceService
    ) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
    this.getResourceData();
    this.getResourceList();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error =>  this.errorMessage = <any>error
      );
  }

  /**
   * 获取显示的产品和地区
   */
  getResourceData() {
    this.resourceService.getResourceData()
      .subscribe(
        result => { 
            // console.log(result);
          if (result.success == 0) {

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
   * Handle the nameListService observable
   */
  getResourceList() {
    this.resourceService.getResourceList()
      .subscribe(
        resources => { 
          // console.log(resources); 
          this.resources = resources; 
        },
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
