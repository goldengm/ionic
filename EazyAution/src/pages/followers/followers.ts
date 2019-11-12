import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertProvider } from '../../providers/alert/alert';
import { LoadingProvider } from '../../providers/loading/loading';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { ConfigProvider } from '../../providers/config/config';
import { SubCategories6Page } from '../sub-categories6/sub-categories6';
import { trigger, style, animate, transition } from '@angular/animations';
import { CartPage } from '../cart/cart';
import { SearchPage } from '../search/search';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the FollowersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-followers',
  templateUrl: 'followers.html',
})
export class FollowersPage {

  search;
  searchResult = [];
  showCategories = true;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public config: ConfigProvider,
    public httpClient: HttpClient,
    public alert: AlertProvider,
    public loading: LoadingProvider,
    public shared: SharedDataProvider,
  ) {
  }

  onChangeKeyword = function (e) {
    //console.log(this.search);
    // if (search != undefined) {
    //rchResult = [];
    //  }
  }
  getSearchData = function () {

    if (this.search != undefined) {
      if (this.search == null || this.search == '') {
        this.shared.toast("Please enter something ");
        return 0;
      }
    }
    else {
      this.shared.toast("Please enter something ");
      return 0;
    }
    this.loading.show();
    this.httpClient.post(this.config.url + 'getsearchdata', { 'searchValue': this.search, 'language_id': this.config.langId }).subscribe((data: any) => {
      this.loading.hide();
      if (data.success == 1) {
        this.searchResult = data.product_data;
        this.showCategories = true;
      }
      if (data.success == 0) {
        this.shared.toast(data.message);
      }
    });
  };


  openCart() {
    this.navCtrl.push(CartPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowersPage');
  }

	openSearch() {
	    this.navCtrl.push(SearchPage);
	}

}
