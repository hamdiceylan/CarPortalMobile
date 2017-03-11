import { NewsDetailComponent } from './../components/news-detail/news-detail';
import { NewsPage } from './../pages/news/news';
import { CarDetailsComponent } from './../components/car-details/car-details';
import { DetailsComponent } from './../components/details/details';
import { VersionsComponent } from './../components/versions/versions';
import { ModelsComponent } from './../components/models/models';
import { Api } from './../providers/api';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModelsComponent,
    VersionsComponent,
    CarDetailsComponent,
    NewsPage,
    NewsDetailComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ModelsComponent,
    VersionsComponent,
    CarDetailsComponent,
    NewsPage,
    NewsDetailComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Api]
})
export class AppModule {}
