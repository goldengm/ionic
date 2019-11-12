import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BannersComponent } from './banners/banners';
import { ProductComponent } from './product/product';
import { FooterComponent } from './footer/footer';
import { SlidingTabsComponent } from './sliding-tabs/sliding-tabs';
import { HeaderComponent } from './header/header';
import { AddFlawComponent } from './add-flaw/add-flaw';
import { TimelineComponentModule } from './timeline/timeline.module';

@NgModule({
     declarations: [
          BannersComponent,
          ProductComponent,
          FooterComponent,
          SlidingTabsComponent,
          HeaderComponent,
          AddFlawComponent,
          TimelineComponentModule,
     ],
     imports: [],
     exports: [
          BannersComponent,
          ProductComponent,
          FooterComponent,
          SlidingTabsComponent,
          HeaderComponent,
          AddFlawComponent,
          TimelineComponentModule,
     ],
     entryComponents: [
          AddFlawComponent
     ]
})
export class ComponentsModule { }
