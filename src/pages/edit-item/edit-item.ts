import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {
  title: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }
  // create new object and pass it to the callback, then dismiss the screen
  saveItem(){
    let newItem = {
      title: this.title,
      description: this.description
    };
 
    this.view.dismiss(newItem);
  }
  // close without changing anything
  close(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

}
