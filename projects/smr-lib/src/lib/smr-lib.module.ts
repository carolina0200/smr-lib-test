import { NgModule } from '@angular/core';
import { SmrLibComponent } from './smr-lib.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: '', redirectTo: 'smr', pathMatch: 'full' },
  { path: 'smr', component: HeaderComponent},
  { path: '**', component: HeaderComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  declarations: [SmrLibComponent, MenuComponent, HeaderComponent],
  exports: [SmrLibComponent, MenuComponent, HeaderComponent]
})
export class SmrLibModule { }
