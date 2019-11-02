import {Component, OnInit} from '@angular/core';
import {highMenu, lowMenu} from './menu';
import {MenuModel} from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  menus: MenuModel[];

  constructor() {
  }

  ngOnInit() {
    // 如果登录判断
    this.menus = highMenu;
  }

}
