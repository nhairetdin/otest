import { Component } from '@angular/core';

import { NotesPage } from '../notes/notes';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
