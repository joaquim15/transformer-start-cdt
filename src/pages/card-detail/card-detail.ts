import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-card-detail',
  templateUrl: 'card-detail.html',
})
export class CardDetailPage {

  id: string;
  name: string;
  numberCard: string;
  bandeira: string;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {

    this.id = navParams.get("id"); // "andrewmcgivery"
    this.name = navParams.get("name"); // "andrewmcgivery"
    this.numberCard = navParams.get("number"); // "andrewmcgivery"
    this.bandeira = navParams.get("bandeira");

    if (this.id !== null) {
      console.log('id: ' + this.id);
      console.log('Name: ' + this.name);
      console.log('Numero Card: ' + this.numberCard);
      console.log('Bandeira: ' + this.bandeira);
    } else {
      console.log('Valor 1: ' + this.id);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardDetailPage');
  }

}
