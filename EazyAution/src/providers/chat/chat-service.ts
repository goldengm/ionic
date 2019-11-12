import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';
import { Events, Platform, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ChatServiceProvider {
    constructor(
        private httpClient: HttpClient,
        private config: ConfigProvider
    ) {

    }

    sendMessage(params) {
        return this.httpClient.post(this.config.url + "send_message", params)
    }

    getAllMessages(params) {
        return this.httpClient.post(this.config.url + "get_all_messages", params)
    }

    getChartRooms(params) {
        return this.httpClient.post(this.config.url + "get_chat_rooms", params)
    } 
}