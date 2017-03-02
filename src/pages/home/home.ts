import { ModelsComponent } from './../../components/models/models';
import { Api } from './../../providers/api';
import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  makes: string = "";

  constructor(
    public navCtrl: NavController,
    public apiProvider: Api,
    public modalCtrl: ModalController) 
  {
    this.getMake();
  }


  getMake(){
    this.apiProvider.getMake()
    .subscribe(makes => {
      console.log(makes);
      this.makes = makes;
    });
  }

  getModels(makeId,makeName){
    let modelModal = this.modalCtrl.create(ModelsComponent, { makeId: makeId, makeName: makeName })
    modelModal.present();
  }

}
