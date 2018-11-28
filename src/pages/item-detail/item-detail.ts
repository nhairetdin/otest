import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // set the item information for class variables, will be accessed from html-code
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

}
