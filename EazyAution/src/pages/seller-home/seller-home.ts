import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../providers/config/config';
import { SubCategoriesPage } from '../sub-categories/sub-categories';
import { trigger, style, animate, transition } from '@angular/animations';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';

/**
 * Generated class for the SellerHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seller-home',
  templateUrl: 'seller-home.html',
})
export class SellerHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public shared: SharedDataProvider,
    public config: ConfigProvider) {
  }
  
  openSubCategories(parent) {
    this.navCtrl.push(SubCategoriesPage, { 'parent': parent });
  }
  openCart() {
    this.navCtrl.push(CartPage);
  }
  openSearch() {
    this.navCtrl.push(SearchPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyerHomePage');
    if (this.config.admob == 1) this.shared.showAd();
  }

}
