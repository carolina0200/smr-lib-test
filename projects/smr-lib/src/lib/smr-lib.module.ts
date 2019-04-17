import { NgModule } from '@angular/core';
import { SmrLibComponent } from './smr-lib.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [SmrLibComponent, MenuComponent, HeaderComponent],
  exports: [SmrLibComponent, MenuComponent, HeaderComponent]
})
export class SmrLibModule { }
