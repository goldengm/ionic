import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrackNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track-now',
  templateUrl: 'track-now.html',
})
export class TrackNowPage {

  items = [
    {
      title: 'Delivered Successfully',
      content: `The shipper has been successfully delivered `,
      icon: 'pin',
      time: { subtitle: '4/16/2013', title: '21:30' }
    },
    {
      title: 'Ready for pickup',
      content: `The shipment is now ready to be picked up. `,
      icon: 'calendar',
      time: { subtitle: 'January', title: '29' }
    },
    {
      title: 'Shipment Processing',
      content: `The shipper has been processed in location`,
      icon: 'calendar',
      time: { title: 'Short Text' }
    },
    {
      title: 'Order ready for dispatch',
      content: ` Order is confirmed and being redied for dispatch`,
      icon: 'calendar',
      time: { title: 'Short Text' }
    }
   
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackNowPage');
  }

}
