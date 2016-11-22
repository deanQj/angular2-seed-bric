import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MobiscrollDirective } from '../shared/directives/mobiscroll.directive';
import { ResourcesComponent } from './resources.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ResourcesComponent, MobiscrollDirective],
  exports: [ResourcesComponent]
})
export class ResourcesModule { }
