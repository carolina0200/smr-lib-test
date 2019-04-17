import { RouteChild } from './route-child.interface';

export interface Route {
  title: string;
  icon: string;
  select: boolean;
  options: RouteChild[];
}
