import { Injectable, Inject } from '@angular/core';
import { RoutesConfigService } from './routes.config';
import { Route } from './route.interface';
import { Observable, of } from 'rxjs';
import { RouteChild } from './route-child.interface';
import { Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

constructor(@Inject(RoutesConfigService) private config: Route[]) {
  console.log(config);
}

 public getRoutes(): Observable<Route[]> {
   return of(this.config);
 }

 public getRoutesChild(): Observable<Routes[]> {
   const routes = [];
   this.config.forEach(item => {
     item.options.forEach(option => {
       const route = {
         path : option.path,
         component: option.loadChildren
       };
       routes.push(route);
     });
   });
   return of(routes);
 }

}
