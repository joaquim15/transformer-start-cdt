import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { CardPage } from "../card/card";
import { TermoPage } from "../termo/termo";


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public nav: NavController) {
  }

  // register and go to home page
  register() {
    this.nav.push(CardPage);
  }
  login() {
    this.nav.push(LoginPage);
  }
  openTermoUso() {
    this.nav.push(TermoPage);
  }
  logout() {
   // this.nav.goToRoot(LoginPage);
    this.nav.setRoot(LoginPage, [],
      { duration: 1000, animation: "android-transition", animate: true });
  }
}
