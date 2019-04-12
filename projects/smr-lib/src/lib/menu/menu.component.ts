import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'enl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private _items: any;
  @Output() selectItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.items = [
      { title: 'Components', select: false, icon: 'fa-database', options: [{name: 'Alerts', path: 'alerts', select: false},
        { name: 'Badge', path: 'badge', select: false },
        { name: 'Breadcrumb', path: 'breadcrumb', select: false },
        { name: 'Buttons', path: 'buttons', select: false },
        { name: 'Button group', path: 'button-group', select: false }] },
      { title: 'Layout', select: false, icon: 'fa-desktop', options: [{name: 'Layout', path: 'layout', select: false},
        { name: 'Badge', path: 'badge', select: false }] },
      { title: 'Theme', select: false, icon: 'fa-magic', options: [{name: 'Theme', path: 'theme', select: false}] },
      { title: 'Updates',  select: false, icon: 'fa-repeat', options: [{name: 'Updates', path: 'updates', select: false}] },
    ];
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
