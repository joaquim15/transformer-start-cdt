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

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  openTermoUso() {
    this.nav.push(TermoPage);
  }

    // logout
    logout() {
      this.nav.setRoot(LoginPage);
    }
}
