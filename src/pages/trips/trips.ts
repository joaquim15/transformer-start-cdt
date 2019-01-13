import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { HomePage } from "../home/home";
import { TermoPage } from "../termo/termo";


@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {

  constructor(public nav: NavController) {
  }

  // register and go to home page
  register() {
    this.nav.push(HomePage);
  }

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  openTermoUso() {
    this.nav.push(TermoPage);
  }
}
