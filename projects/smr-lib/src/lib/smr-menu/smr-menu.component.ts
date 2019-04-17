import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RoutesService } from './routes.service';

@Component({
  selector: 'enl-smr-menu',
  templateUrl: './smr-menu.component.html',
  styleUrls: ['./smr-menu.component.css']
})
export class SmrMenuComponent implements OnInit {

  private _items: any;
  @Output() selectItem = new EventEmitter();
  constructor(private routes: RoutesService) { }

  ngOnInit() {
    this.routes.getRoutes().subscribe(res => {
      this.items = res;
    }, err => {
      console.error(err);
    });
    console.log('menu');
    console.log(this.items);
  }

  public goItem(item: any, option: any) {
    this.items.forEach(i => {
      i.select = false;
      i.options.forEach(o => {
        o.select = false;
      });
    });
    item.select = true;
    option.select = true;

    if (window.outerWidth <= 768) {
      this.selectItem.emit({ select: true });
    }
  }

  public get items(): any { return this._items; }
  public set items(value: any) { this._items = value; }
}
