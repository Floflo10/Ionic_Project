import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { CartPage } from '../pages/cart/cart';
import { CartPageModule } from '../pages/cart/cart.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalformPage } from '../pages/modalform/modalform';
import { ModalformPageModule } from '../pages/modalform/modalform.module';
import { ModalCardPage } from '../pages/modalcard/modalcard';
import { ModalCardPageModule } from '../pages/modalcard/modalcard.module';
import { HttpClientModule } from '@angular/common/http';

import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PizzaService } from '../providers/pizza-service/pizza-service';
import { CartServiceProvider } from '../providers/cart-service/cart-service';
import { GlobalVarProvider } from '../providers/global-var/global-var';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CartPageModule,
    ModalformPageModule,
    ModalCardPageModule,
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
    LocalNotifications,
    PizzaService,
    CartServiceProvider,
    GlobalVarProvider
  ]
})
export class AppModule {}
