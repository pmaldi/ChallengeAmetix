import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { NavController } from 'ionic-angular';
import { Tab1Page } from '../tab1/tab1.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  lieu:string;
  pays:string;

  constructor(private storage:Storage) {
    this.storage.get('location').then((val) => {
      if(val != null){
        let location = JSON.parse(val);
        this.lieu = location.lieu
        this.pays = location.pays
      } else{
        this.lieu = 'Paris';
        this.pays = 'FR';
      }
    })
  }

  RechercheForm(){
    let location = {
      lieu: this.lieu,
      pays: this.pays
    }
    this.storage.set('location', JSON.stringify(location));
    //this.navCtrl.push("");
  }
}
