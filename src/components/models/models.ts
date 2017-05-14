import { VersionsComponent } from './../versions/versions';
import { Api } from './../../providers/api';
import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController } from 'ionic-angular';


/*
  Generated class for the Models component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'models',
  templateUrl: 'models.html'
})
export class ModelsComponent {

  makeId: string;
  makeName: string;
  models: any;

  constructor(
    public params: NavParams,
    public apiProvider: Api,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
      this.makeId = params.get('makeId');
      this.makeName = params.get('makeName');
      console.log(this.makeId);
      this.getModels(this.makeId);
  }
  
  getModels(makeId){
    this.apiProvider.getModel(makeId)
    .subscribe(models => {
      this.models = models;
    });
  }

  getVersions(model){
    let versionModal = this.modalCtrl.create(VersionsComponent, { model: model,makeName:this.makeName })
    versionModal.present();
  }

  close(){
    this.viewCtrl.dismiss();
  }
}
