import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { StandaloneTestComponent } from '../components/standalone-test/standalone-test.component';
import { IonVideoPlayerModule } from 'ion-video-player';
import { IonCelebrationModule } from 'ion-celebration';
import { IonRatingStarsModule } from 'ion-rating-stars';
import { CameraPreview, CameraPreviewOptions } from '@capgo/camera-preview';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  standalone: true,
  imports: [StandaloneTestComponent,IonicModule, IonVideoPlayerModule, IonCelebrationModule, IonRatingStarsModule],
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  vidEnded(){
    console.log('asdf')
  }

  ratingChanged(e: any){
    console.log(e)
  }

  ionViewDidEnter(){
    this.camStart();
  }

  camStart(){
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'front',
      height: window.screen.height,
      width: window.screen.width, 
      toBack: true,
      enableOpacity: true
    };
    CameraPreview.start(cameraPreviewOptions);
  }

  startRecording(){
    const cameraPreviewOptions: CameraPreviewOptions = {
      position: 'front',
      width: window.screen.width,
      height: window.screen.height,
    };
    
    //CameraPreview.startRecordVideo(cameraPreviewOptions);
  }

}
