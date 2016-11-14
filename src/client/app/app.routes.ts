import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { ResourcesRoutes } from './resources/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...ResourcesRoutes
];
