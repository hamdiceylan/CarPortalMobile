import { NewsDetailComponent } from './../../components/news-detail/news-detail';
import { Api } from './../../providers/api';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

/*
  Generated class for the News page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {

  newsList:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public apiProvider:Api,
    public modalCtrl: ModalController
    ) {
      this.getNews();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }


  getNews(){
    this.apiProvider.getNews()
    .subscribe(newsList => {
      console.log(newsList);
      this.newsList = newsList;
    });
  }

  newsDetail(newsId){
    let modelModal = this.modalCtrl.create(NewsDetailComponent, { newsId: newsId })
    modelModal.present();
  }

}
