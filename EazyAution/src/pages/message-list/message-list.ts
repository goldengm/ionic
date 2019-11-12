import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatRoomPage } from '../chat-room/chat-room';
import { ChatServiceProvider } from '../../providers/chat/chat-service';
@Component({
  selector: 'page-message-list',
  templateUrl: 'message-list.html',
})
export class MessageListPage {
  arrRooms = [{
    avatar: "assets/300.jpeg",
    isOnline: true,
    badge: 2,
    name: "Test User",
    message: "Test Message one",
    datetime: "just now"
  },
  {
    avatar: "assets/300.jpeg",
    isOnline: true,
    badge: 2,
    name: "Test User 2",
    message: "Test Message two",
    datetime: "just now"
  },
  {
    avatar: "assets/300.jpeg",
    isOnline: true,
    badge: 2,
    name: "Test User 3",
    message: "Test Message three",
    datetime: "just now"
  },
  {
    avatar: "assets/300.jpeg",
    isOnline: true,
    badge: 2,
    name: "Test User 4",
    message: "Test Message four",
    datetime: "just now"
  }
];
  constructor(
    private navCtrl: NavController,
    private chat: ChatServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageListPage');
    this.getChatList();
  }

  getChatList() {
    let param = {
      user_id: 1,
      room_id: "1_2"
    };
    this.chat.getChartRooms(param).subscribe(res => {
      if (res["success"] === true) {
        this.arrRooms = res["data"];
      }else{
        console.log("error while getting data");
      }
    })
  }

  gotoChat () {
    this.navCtrl.push(ChatRoomPage);  
  }
}
