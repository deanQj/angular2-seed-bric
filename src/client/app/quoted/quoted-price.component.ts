import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { mobileValidator } from '../shared/directives/valid.directive';

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
  documentMinHeight: string;

  phone: number;
  content: string;
  quotedPriceForm: FormGroup;
  contentLength: number = 0;


  /**
   * 构造函数 - 创建服务的实例
   */
  constructor(private fb: FormBuilder) {}


  /**
   * 初始化
   */
  ngOnInit(): void {
    this.documentMinHeight = window.document.body.offsetHeight + 'px';

    this.buildForm();
  }

  inputContent(control: any) {
    // console.log(control)
    let text = control.value;
    // let text = this.quotedPriceForm.get('content').value;
    if (!text) return ;
    if (text.length <= 10) {
      this.contentLength = text.length;
    } else {
      this.content = text.substr(0, text.length-1);
      console.log("超出")
    }
  }


  onSubmit() { 
    if (this.quotedPriceForm.valid) {
      console.log(this.quotedPriceForm.value)
    }
  }


  /**
   * 构建form
   */
  buildForm(): void {
    this.quotedPriceForm = this.fb.group({
      'phone': [this.phone, [
          Validators.required,
          mobileValidator()
        ]
      ],
      'content': [this.content, Validators.required]
    });
    this.quotedPriceForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }


  /**
   * form元素 - changed
   */
  onValueChanged(data?: any) {
    if (!this.quotedPriceForm) { return; }
    const form = this.quotedPriceForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
      if (field == "content" && control) {
        this.inputContent(control);
      }
    }
  }


  /**
   * form元素 - errors对象
   */
  formErrors: any = {
    'phone': '',
    'content': ''
  };

  /**
   * form元素 - 验证失败的message对象
   */
  validationMessages: any = {
    'phone': {
      'required':  '手机号不能为空！',
      'validMobile': '手机号格式不正确！'
    },
    'content': {
      'required': '内容不能为空！'
    }
  };
  
 

}
