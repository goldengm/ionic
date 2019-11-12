import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../providers/config/config';
import { SubCategoriesPage } from '../sub-categories/sub-categories';
import { trigger, style, animate, transition } from '@angular/animations';
import { CartPage } from '../cart/cart';
//import { PurchasedPage } from '../cart/cart';
import { MyOrdersPage } from '../my-orders/my-orders';
import { SearchPage } from '../search/search';
import { ReturnsPage } from '../returns/returns';
import { WishListPage } from '../wish-list/wish-list';
import { NewsPage } from '../news/news';
import { InvestigationsPage } from '../investigations/investigations';
// import { LikedPage } from '../cart/cart';

import { ShippingPage } from '../shipping/shipping';


/**
 * Generated class for the BuyerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-buyer-home',
  animations: [
    trigger(
      'animate', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('500ms', style({ opacity: 1 }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate('700ms', style({ opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: 'buyer-home.html',
})

export class BuyerHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public shared: SharedDataProvider,
    public config: ConfigProvider) {
  }
  
  openSubCategories(parent) {
    this.navCtrl.push(SubCategoriesPage, { 'parent': parent });
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  openReturns() {
    this.navCtrl.push(ReturnsPage);
  }
  openLiked() {
    this.navCtrl.push(WishListPage);
  }
  openSupport() {
    this.navCtrl.push(NewsPage);
  }
  openShipping() {
    this.navCtrl.push(ShippingPage);
  }
  openInvestigations() {
    this.navCtrl.push(InvestigationsPage);
  }
  openPurchased() {
    this.navCtrl.push(MyOrdersPage);
  }
  openOrders() {
    this.navCtrl.push(CartPage);
  }
  openSearch(page) {
    this.navCtrl.push(page);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyerHomePage');
    if (this.config.admob == 1) this.shared.showAd();
  }

}
