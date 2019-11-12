import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, List, Content, Platform, ActionSheetController, ModalController } from 'ionic-angular';
import { ChatServiceProvider } from '../../providers/chat/chat-service'
import {Echo} from 'laravel-echo-ionic';
import { ConfigProvider } from '../../providers/config/config';
import { HttpClient } from '@angular/common/http';
import { SharedDataProvider } from '../../providers/shared-data/shared-data';
import { TranslateService } from '@ngx-translate/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertProvider } from '../../providers/alert/alert';
import { LoadingProvider } from '../../providers/loading/loading';
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  @ViewChild(Content) content : Content
  echo: any;
  editorMsg = "";
  arrChats = [
    {
      senderId: 0,
      message: "Test Message",
      time: "2 min ago"
    }
  ]
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private config: ConfigProvider,
    public httpClient: HttpClient,
    public shared: SharedDataProvider,
    public translate: TranslateService,
    public platform: Platform,
    private camera: Camera,
    public alert: AlertProvider,
    public actionSheetCtrl: ActionSheetController,
    public loading: LoadingProvider,
    public modalCtrl: ModalController,
    private chat: ChatServiceProvider) {
    this.echo = new Echo({
      broadcaster: 'socket.io',
      host: this.config.socketUrl
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatRoomPage');
    this.echo.channel('1_2').listen('MessageSent', (e)=>{
      console.log(e)
    })
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.content.scrollToBottom(0)
    }, 400);
  }

  back() {
    this.navCtrl.pop();
  }

  sendMsg() {
    if (this.editorMsg != "") {
      console.log(this.editorMsg);
      let params = {
        "sender": 1,
        "room_id": "1_2",
        "content": this.editorMsg
      }
      this.chat.sendMessage(params).subscribe(res =>{
        console.log(res)
      });

      this.arrChats.push({
        senderId: 2,
        message: this.editorMsg,
        time: "Just Now"
      })

      this.editorMsg = "";
    }
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

  showOptions() {
    
  }

}
