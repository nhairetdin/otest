import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }
  // new object is created and passed to the callback function which was wired up when launching this screen
  saveItem(){
    let newItem = {
      title: this.title,
      description: this.description,
      checked: false
    };
 
    this.view.dismiss(newItem);
  }
  // close without saving
  close(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

}
