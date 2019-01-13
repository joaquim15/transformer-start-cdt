import { Component } from '@angular/core';

import { TripsPage } from '../trips/trips';
import { NotificationsPage } from '../notifications/notifications';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TripsPage;
  tab2Root = HomePage;
  tab3Root = NotificationsPage;

  constructor() {

  }
}
