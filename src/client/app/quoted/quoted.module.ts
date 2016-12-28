import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { QuotedPriceComponent } from './quoted-price.component';
import { QuotedRoutingModule } from './quoted-routing.module'
import { DialogComponent } from '../shared/dialog/dialog.component';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule, QuotedRoutingModule],
  declarations: [QuotedPriceComponent,DialogComponent],
  exports: [QuotedPriceComponent]
})
export class QuotedModule { }
