import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the AddFlawComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-flaw',
  templateUrl: 'add-flaw.html'
})
export class AddFlawComponent {

  text: string;
  type = ""
  position = ""
  constructor(
    public viewCtrl: ViewController
  ) {
    console.log('Hello AddFlawComponent Component');
    this.text = 'Hello World';
  }

  saveFlaw() {
    let data = {
      type: this.type,
      position: this.position
    }
    this.viewCtrl.dismiss(data);
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }


}
