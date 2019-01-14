import { Component } from '@angular/core';

import { MenuPage } from '../menu/menu';
import { CardPage } from '../card/card';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = CardPage;
 // tab3Root = NotificationsPage;

  constructor() {

  }
}
