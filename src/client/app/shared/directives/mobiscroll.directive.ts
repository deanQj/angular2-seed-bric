import { Directive, ElementRef, Input, Renderer, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

/**
 * 环境声明
 * @type {any}
 */
declare var $:any;

@Directive({  
    selector: '[mobiscroll]',
    // outputs : ['onSet']
    host: {  
        '(ngModelChange)' : 'onInputChange($event)'
    }
})
export class MobiscrollDirective implements OnInit {  
  
  @Input('mobiscroll') inputModel:any;  

  @Output()
  public onSet: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer) {
    // console.log(el)
    // console.log(renderer)
  }  

  ngOnInit() {
    var self = this;
    
    setTimeout( () => {
      let $dom = $(self.el.nativeElement);
      $dom.mobiscroll().select({
        theme: 'mobiscroll',
        lang: 'zh',
        display: 'bottom',
        mode: $dom.prev().val(),
        // minWidth: 100,
        onSet: function(event: any, inst: any) {
          let valArr = inst.getVal().split(':'),
              val = $.trim(valArr[1]);
          self.onSet.emit(val);
        },
        onTabChange: function (event: any, inst: any) {
          console.log(event)
        }
      });

    }, 1000);

  }

  onInputChange($event: any) {
    console.log($event)
  }

/*  
  @HostListener('mouseenter') onMouseEnter() {
    this._highlight(this.inputModel);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._highlight(null);
  }

  private _highlight(color:string) {  
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }  
*/

} 