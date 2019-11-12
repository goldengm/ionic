import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, ModalController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ConfigProvider } from '../../providers/config/config';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertProvider } from '../../providers/alert/alert';
import { LoadingProvider } from '../../providers/loading/loading';
import { IonicStepperComponent } from 'ionic-stepper';
import { AddFlawComponent } from '../../components/add-flaw/add-flaw';

/**
 * Generated class for the AddListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-listing',
  templateUrl: 'add-listing.html',
})
export class AddListingPage {
  @ViewChild('stepper') stepper: IonicStepperComponent;
  categories = [];
  arrFlaws = [];
  arrImages = [
    "assets/intro/1.gif",
    "assets/intro/1.gif",
    "assets/intro/1.gif",
    "assets/intro/1.gif"
  ]

  listing = {
    coverUrl: "",
    category: "",
    title: "",
    description: "",
    condition: "",
    price: 0,
    shipping: "",
    acceptOffer: false,
    autorelisting: false,
    listingDate: "",
    auctionStyle: "",
    additionalDesc: ""
  }
  constructor(
    public httpClient: HttpClient,
    public config: ConfigProvider,
    public shared: SharedDataProvider,
    public translate: TranslateService,
    public platform: Platform,
    private camera: Camera,
    public navCtrl: NavController,
    public alert: AlertProvider,
    public actionSheetCtrl: ActionSheetController,
    public loading: LoadingProvider,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddListingPage');
  }

  openActionSheet() {
    this.translate.get(["Camera", "Gallery", "Cancel", "Choose"]).subscribe((res) => {
      const actionSheet = this.actionSheetCtrl.create({
        buttons: [
          {
            text: res["Camera"],
            icon: 'camera',
            handler: () => {
              this.openCamera("camera");
              console.log('Destructive clicked');
            }
          }, {
            text: res["Gallery"],
            icon: 'image',
            handler: () => {
              this.openCamera("gallery");
              console.log('Archive clicked');
            }
          }, {
            text: res["Cancel"],
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    });
  }

  openCamera(type) {
    this.loading.autoHide(1000);

    let source = this.camera.PictureSourceType.CAMERA;
    if (type == 'gallery')
      source = this.camera.PictureSourceType.PHOTOLIBRARY;

    const options: CameraOptions = {
      quality: 80,
      sourceType: source,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    this.platform.ready().then(() => {
      this.camera.getPicture(options).then((imageData) => {
        // this.profilePicture = 'data:image/jpeg;base64,' + imageData;
      }, (err) => { });
    });
  }

  selectChange(evt) {
    console.log(evt)
  }

  async addFlaw() {
    let flawModal = await this.modalCtrl.create(AddFlawComponent, {});
    flawModal.onDidDismiss(data => {
      if (data !== undefined) {
        this.arrFlaws.push(data);
      }
    })
    flawModal.present();
  }

  removeFlaw(idx) {
    this.arrFlaws.splice(idx, 1);
  }

  onSave() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Save',
      message: 'Do you want to save this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: () => {
            console.log(this.listing);
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

}
