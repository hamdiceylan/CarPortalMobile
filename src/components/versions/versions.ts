import { CarDetailsComponent } from './../car-details/car-details';
import { DetailsComponent } from './../details/details';
import { Api } from './../../providers/api';
import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController } from 'ionic-angular';

/*
  Generated class for the Versions component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'versions',
  templateUrl: 'versions.html'
})
export class VersionsComponent {

  versions: any;
  model: any;
  makeName: any;

    constructor(
    public params: NavParams,
    public apiProvider: Api,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController)  {
    this.model = params.get('model');
    this.makeName = params.get('makeName');
    console.log(this.model);
    this.getModels(this.model.id);
  }

  getModels(modelId){
    this.apiProvider.getNewVersions(modelId)
    .subscribe(versions => {
      this.versions = versions;
    });
  }

  getDetails(versionId){
    let detailModal = this.modalCtrl.create(CarDetailsComponent, { versionId: versionId })
    detailModal.present();
  }

  

  close(){
    this.viewCtrl.dismiss();
  }
}
