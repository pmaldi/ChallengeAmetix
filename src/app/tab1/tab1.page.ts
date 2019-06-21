import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  meteo:any;
  lieu:{
    ville: string,
    pays: string
  }


  constructor(private ApiService:ApiService, private storage:Storage) {

  }

  ionViewWillEnter(){

    this.storage.get('location').then((val) => {
      if(val != null){
        this.lieu = JSON.parse(val);
      }else{
        this.lieu = {
          ville: 'Paris',
          pays: 'FR'
        }
      }

      this.ApiService.getMeteo(this.lieu.ville, this.lieu.pays).subscribe(meteo => {
        this.meteo = meteo;
      });  
    });
  }
}
