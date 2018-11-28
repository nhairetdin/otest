import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditItemPage } from '../edit-item/edit-item';

import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  public items = []

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataProvider: DataProvider) {
    this.dataProvider.getData().then(notes => {
      this.items = notes ? notes.sort((a, b) => a.title < b.title) : []
    })
  }
  // this function is called when user clicks new item buttons
  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });

    addModal.present();
  }
  //this will open a new modal screen displaying the item
  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
  // this is called when edit button is clicked, 
  // will open another screen and also sets onDidDismiss-callback function for actions when closed
  editItem(item) {
    let editModal = this.modalCtrl.create(EditItemPage, { item: item });

    editModal.onDidDismiss((newitem) => {
      if (newitem) {
        this.deleteItem(item)
        this.saveItem(newitem);
      }
    });

    editModal.present();
  }
  // this will delete an item when delete clicked
  deleteItem(item) {
    this.items = this.items.filter(i => i.title !== item.title)
    this.dataProvider.save(this.items);
  }
  // save...
  saveItem(item) {
    this.items.push(item);
    this.dataProvider.save(this.items);
  }
  // this is called when the done/undone switch is clicked, position will be saved in database
  onCheckedChange(item) {
    this.dataProvider.replace({ ...item, checked: !item.checked })
  }

}
