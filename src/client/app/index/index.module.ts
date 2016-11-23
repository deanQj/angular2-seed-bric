import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module'


@NgModule({
  imports: [CommonModule, SharedModule, IndexRoutingModule],
  declarations: [IndexComponent],
  exports: [IndexComponent]
})
export class IndexModule { }
