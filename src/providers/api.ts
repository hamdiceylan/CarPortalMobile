import { Auth } from './auth';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {

  apiEndPoint: string = "http://api.araba.net.tr/api/";

  constructor(public http: Http) {
  }

  getMake() {
    // let headers = new Headers({
    //   'Authorization': 'Bearer ' + this.authProvider.token
    // });
    // let options = new RequestOptions({ headers: headers });

    return this.http.get(this.apiEndPoint + 'make/')
      .map(res => res.json())
  }

  getModel(makeId) {
    return this.http.get(this.apiEndPoint + 'model/make/'+makeId)
      .map(res => res.json())
  }

  getNewVersions(modelId){
    return this.http.get(this.apiEndPoint + 'version/model/'+modelId+'/year/2016')
      .map(res => res.json())
  }

  getDetails(versionId){
    return this.http.get(this.apiEndPoint + 'cardetail/version/'+versionId)
      .map(res => res.json())
  }

  getImages(vehicleId){
    return this.http.get(this.apiEndPoint + 'image/vehicle/'+vehicleId)
      .map(res => res.json())
  }

}
