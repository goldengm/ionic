import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackNowPage } from './track-now';

@NgModule({
  declarations: [
    TrackNowPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackNowPage),
  ],
})
export class TrackNowPageModule {}
