import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { CartPage } from '../pages/cart/cart';

import { ModalformPage } from '../pages/modalform/modalform';
import { ModalCardPage } from '../pages/modalcard/modalcard';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PizzaService } from '../providers/pizza-service/pizza-service';
import { CartServiceProvider } from '../providers/cart-service/cart-service';
import { GlobalVarProvider } from '../providers/global-var/global-var';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CartPage,
    ModalformPage,
    ModalCardPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CartPage,
    ModalformPage,
    ModalCardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    PizzaService,
    CartServiceProvider,
    GlobalVarProvider
  ]
})
export class AppModule {}
