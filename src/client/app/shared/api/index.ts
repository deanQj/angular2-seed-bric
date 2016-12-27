/**
 * API 
 */
import { ResourceService } from './resource.service';
import { WeixinService } from './weixin.service';
import { MallService } from './mall.service';

export const Api: any[] = [
  ResourceService,
  WeixinService,
  MallService
];
