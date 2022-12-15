import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { IonVideoPlayerModule } from 'ion-video-player';
import { IonCelebrationModule } from 'ion-celebration';
import { IonRatingStarsModule } from 'ion-rating-stars';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonVideoPlayerModule,
    IonCelebrationModule,
    IonRatingStarsModule,
    HomePageRoutingModule
  ],
  declarations: []
})
export class HomePageModule { }
