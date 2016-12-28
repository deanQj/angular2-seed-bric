import { Component, Input } from '@angular/core';

/**
 * 环境声明
 * @type {any}
 */
declare var $:any;

/**
 * This class represents the dialog component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css']
})
export class DialogComponent {

  @Input()
  message: string = "";


  /**
   * 构造函数
   */
  constructor() {}

  close() {
    this.message = "";
  }

}

