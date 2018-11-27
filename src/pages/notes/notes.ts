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

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

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

  deleteItem(item) {
    this.items = this.items.filter(i => i.title !== item.title)
    this.dataProvider.save(this.items);
  }

  saveItem(item) {
    this.items.push(item);
    this.dataProvider.save(this.items);
  }

  onCheckedChange(item) {
    this.dataProvider.replace({ ...item, checked: !item.checked })
    console.log("changed")
  }

}
