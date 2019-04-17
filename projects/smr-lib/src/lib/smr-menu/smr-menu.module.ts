import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmrMenuComponent } from './smr-menu.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Route } from './route.interface';
import { RoutesConfigService } from './routes.config';
import { RoutesService } from './routes.service';
import { Router } from './menu.routes';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    /*RouterModule.forRoot(Router.getRoutes(), {useHash: true}),*/
  ],
  declarations: [SmrMenuComponent],
  exports: [SmrMenuComponent]
})
export class SmrMenuModule {

  static forRoot(config: Route[]): ModuleWithProviders {
    return {
      ngModule: SmrMenuModule,
      providers: [
        RoutesService,
        {
          provide: RoutesConfigService,
          useValue: config
        }
      ]
    };
  }
}
