import { NavParams, ViewController } from 'ionic-angular';
import { Api } from './../../providers/api';
import { Component } from '@angular/core';

/*
  Generated class for the NewsDetail component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'news-detail',
  templateUrl: 'news-detail.html'
})
export class NewsDetailComponent {

  newsDetail:any;

  constructor(public params: NavParams,
  public viewCtrl: ViewController,
  public apiProvider: Api) {
    let newsId = params.get('newsId');
    this.getNewsDetail(newsId);
  }

  getNewsDetail(newsId){
    this.apiProvider.getNewsbyId(newsId)
    .subscribe(newsDetail => {
      this.newsDetail = newsDetail;
      console.log(this.newsDetail);
    });
  }

  close(){
      this.viewCtrl.dismiss();
  }
}
