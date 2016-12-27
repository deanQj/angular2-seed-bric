import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { QuotedPriceComponent } from './quoted-price.component';
import { QuotedRoutingModule } from './quoted-routing.module'


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedModule, QuotedRoutingModule],
  declarations: [QuotedPriceComponent],
  exports: [QuotedPriceComponent]
})
export class QuotedModule { }
