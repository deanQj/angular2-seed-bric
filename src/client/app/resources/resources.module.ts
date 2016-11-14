import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ResourcesComponent } from './resources.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ResourcesComponent],
  exports: [ResourcesComponent],
  providers: [NameListService]
})
export class ResourcesModule { }
