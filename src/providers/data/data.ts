import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// this class is for database access
@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
  }
  // get all data from 'notes'
  getData() {
    return this.storage.get('notes'); 
  }
  // this will save data
  save(data){
    this.storage.set('notes', data);
  }
  // this function replaces an item, is used when the switch is changed
  // this way we dont need to delete/add it again, only change
  replace(item) {
    this.storage.get('notes')
      .then(notes => {
        if (notes) {
          notes.forEach(element => {
            if (element.title === item.title) {
              element.checked = item.checked
            }
          });
          this.storage.set('notes', [ ...notes ])
        }
      })
  }

}
