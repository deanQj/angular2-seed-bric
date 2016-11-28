import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MobiscrollDirective } from '../shared/directives/mobiscroll.directive';
import { ResourcesComponent } from './resources.component';
import { ResourcesViewComponent } from './resources-view.component';
import { ResourcesRoutingModule } from './resources-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, ResourcesRoutingModule],
  declarations: [ResourcesComponent, MobiscrollDirective, ResourcesViewComponent],
  exports: [ResourcesComponent, ResourcesViewComponent]
})
export class ResourcesModule { }
