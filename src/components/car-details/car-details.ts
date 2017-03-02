import { Api } from './../../providers/api';
import { NavParams, ViewController, ModalController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'car-details',
  templateUrl: 'car-details.html'
})
export class CarDetailsComponent {

  versionId: string;
  details:any;
  images:any;
  type:string;

  constructor(
    public params: NavParams,
    public apiProvider: Api,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController)  {
    this.versionId = params.get('versionId');
    console.log(this.versionId);
    this.getDetail(this.versionId);
    this.type = 'teknik';
    
  }

  getDetail(versionId){
    this.apiProvider.getDetails(versionId)
    .subscribe(details => {
      this.details = JSON.parse(details.json);
      console.log(this.details);
    });

    this.apiProvider.getImages(versionId)
    .subscribe(images => {
      this.images = images
    });
  }

  close(){
      this.viewCtrl.dismiss();
  }
}

