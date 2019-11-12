import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BoxedProtectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boxed-protection',
  templateUrl: 'boxed-protection.html',
})
export class BoxedProtectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoxedProtectionPage');
  }

  public form = [
      { val: 'Take a picture of item', isChecked: true },
      { val: 'Take a picture in box', isChecked: false },
      { val: 'Take a picture of packaged item', isChecked: false },
       { val: 'Take a picture all boxed up', isChecked: false }
    ];

}
