import { InjectionToken } from '@angular/core';
import { Route } from './route.interface';

export const RoutesConfigService = new InjectionToken<Route[]> ('Route');
