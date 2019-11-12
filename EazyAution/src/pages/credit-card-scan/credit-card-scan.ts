import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content } from 'ionic-angular';
import { CardIO } from '@ionic-native/card-io';


@Component({
  selector: 'page-credit-card-scan',
  templateUrl: 'credit-card-scan.html'
})
export class CreditCardScanPage {
  
  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  selectedTab = '';
  categoryId = '';
  categoryName = '';

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    console.log('Hello CreditCardScan Page');
  }

  cardImage = 'assets/credit-card.png';

  card = {
    cardType: '',
    cardNumber: '',
    redactedCardNumber: '',
    expiryMonth: null,
    expiryYear: null,
    cvv: '',
    postalCode: ''
  };

  scanCard() {
    
  }

  // Just to animate the fab
  fabGone = false;
  ionViewWillEnter() {
    this.fabGone = false;
  }

  ionViewWillLeave() {
    this.fabGone = true;
  }

  //changing tab
  changeTab(c) {
   // this.applyFilter = false;
   // this.infinite.enable(true);
  // this.page = 0;
    if (c == '') this.selectedTab = c
    else this.selectedTab = c.id;
  //  this.getProducts(null);
  //  this.getFilters(this.selectedTab);
  }

}
