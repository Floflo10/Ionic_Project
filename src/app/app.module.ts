import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ModalformPage } from '../pages/modalform/modalform';
import { HttpClientModule } from '@angular/common/http';
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
    ModalformPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ModalformPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    IonicStorageModule,
    PizzaService,
    CartServiceProvider,
    GlobalVarProvider
  ]
})
export class AppModule {}
