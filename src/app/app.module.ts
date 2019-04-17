import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmrLibModule, SmrMenuModule, Route } from 'smr-lib';

const routes: Route[] = [
  { title: 'Components', select: false, icon: 'fa-database', options: [{name: 'Alerts', path: 'alerts', select: false, loadChildren: ''},
        { name: 'Badge', path: 'badge', select: false, loadChildren: '' },
        { name: 'Breadcrumb', path: 'breadcrumb', select: false, loadChildren: '' },
        { name: 'Buttons', path: 'buttons', select: false, loadChildren: '' },
        { name: 'Button group', path: 'button-group', select: false, loadChildren: '' }] },
      { title: 'Layout', select: false, icon: 'fa-desktop', options: [{name: 'Layout', path: 'layout', select: false, loadChildren: ''},
        { name: 'Badge', path: 'badge', select: false, loadChildren: '' }] },
      { title: 'Theme', select: false, icon: 'fa-magic', options: [{name: 'Theme', path: 'theme', select: false, loadChildren: ''}] },
      { title: 'Updates',  select: false, icon: 'fa-repeat', options: [
        {name: 'Updates', path: 'updates', select: false, loadChildren: ''}] },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SmrLibModule,
    SmrMenuModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
