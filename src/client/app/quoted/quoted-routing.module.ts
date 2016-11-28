import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuotedPriceComponent } from './quoted-price.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'quotedPrice', component: QuotedPriceComponent }
    ])
  ],
  exports: [RouterModule]
})
export class QuotedRoutingModule { }
