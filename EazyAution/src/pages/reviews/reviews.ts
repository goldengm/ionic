import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddReviewPage } from '../add-review/add-review';

/**
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html',
})
export class ReviewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewsPage');
  }

   logRatingChange(rating){
        console.log("changed rating: ",rating);
        // do your stuff
    }

    
  openPage(page) {
   
      this.navCtrl.push(AddReviewPage);
  }

}
