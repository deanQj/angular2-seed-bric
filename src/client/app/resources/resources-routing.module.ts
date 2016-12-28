import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { ResourcesViewComponent } from './resources-view.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'resources', component: ResourcesComponent },
      { path: 'resourcesView/:id', component: ResourcesViewComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
