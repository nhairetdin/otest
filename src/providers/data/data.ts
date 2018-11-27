import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
  }

  getData() {
    return this.storage.get('notes'); 
  }
 
  save(data){
    this.storage.set('notes', data);
  }

  replace(item) {
    this.storage.get('notes')
      .then(notes => {
        if (notes) {
          notes.forEach(element => {
            if (element.title === item.title) {
              element.checked = item.checked
            }
          });
          this.storage.set('notes', notes)
        }
      })
  }

}
