import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { AdMob } from '@ionic-native/admob';
import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {  
  rootPage = TabsPage;
  platform:Platform;

  constructor(private admob: AdMob,platform: Platform) {
    this.platform = platform;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  if (AdMob) {
    AdMob.createBanner({
    adId: "asd",
    // position: AdMob.AD_POSITION.BOTTOM_CENTER,
    // isTesting: true,//comment this out before publishing the app
    autoShow: true
  });
}
}
