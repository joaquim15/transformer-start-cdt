import { Component } from "@angular/core";
import { NavController, PopoverController, AlertController } from "ionic-angular";
import { Storage } from '@ionic/storage';

import { NotificationsPage } from "../notifications/notifications";
import { SettingsPage } from "../settings/settings";
import { MenuPage } from "../menu/menu";
import { SearchLocationPage } from "../search-location/search-location";
import { CardDetailPage } from "../card-detail/card-detail";


@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})

export class CardPage {
  // search condition
  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  cards = [
    {
      id: '1',
      tpCard: 'PRÉ PAGO',
      name: 'Doug Fanny, Doug Fanny, Doug Fanny',
      numberCard: '1111.xxxx.xxxx.1111',
      postImageUrl: 'assets/img/card/green-card.png',
      saldo: '340,00'
    },
    {
      id: '2',
      tpCard: 'A...',
      name: 'Doug Fanny',
      numberCard: '2222.xxxx.xxxx.2222',
      postImageUrl: 'assets/img/card/green-card.png',
      saldo: '0,00'
    },
    {
      id: '3',
      tpCard: 'B...',
      name: 'Doug Fanny',
      numberCard: '3333.xxxx.xxxx.3333',
      postImageUrl: 'assets/img/card/green-card.png',
      saldo: '245,00'
    }
  ];

  constructor(private storage: Storage,
    public nav: NavController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Rio de Janeiro, Brazil"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  // go to result page
  doSearch() {
    this.nav.push(MenuPage);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  openDetailCard(card) {
    this.nav.push(CardDetailPage, {
      id: card.id,
      name: card.name,
      number: card.numberCard,
      bandeira: card.postImageUrl,
      tpCard: card.tpCard,
      saldo: card.saldo
    });
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  addNewCard() {
    const alert = this.alertCtrl.create({
      title: 'Cadastro novo Cartão',
      //message: 'Enter a name for this new album you\'re so keen on adding',
      inputs: [
        {
          name: 'title',
          placeholder: 'Nº Cartão'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data: any) => {
            console.log('Saved clicked', data);
          }
        }
      ]
    });

    alert.present();
  }
}
//
