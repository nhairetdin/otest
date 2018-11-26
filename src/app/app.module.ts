import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotesPage } from '../pages/notes/notes';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AddItemPage } from '../pages/add-item/add-item';
import { EditItemPage } from '../pages/edit-item/edit-item'
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register'

import { IonicStorageModule } from '@ionic/storage';
import { DataProvider } from '../providers/data/data';

import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthProvider } from '../providers/auth/auth';

let config = {
  apiKey: "AIzaSyA1cj0-1acxV5gyvwvb4Kwv2MhwYaKw0wE",
  authDomain: "noteslist-a7b18.firebaseapp.com",
  databaseURL: "https://noteslist-a7b18.firebaseio.com",
  projectId: "noteslist-a7b18",
  storageBucket: "noteslist-a7b18.appspot.com",
  messagingSenderId: "152289204254"
};

@NgModule({
  declarations: [
    MyApp,
    NotesPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddItemPage,
    EditItemPage,
    ItemDetailPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotesPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddItemPage,
    EditItemPage,
    ItemDetailPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    AuthProvider
  ]
})
export class AppModule {}
