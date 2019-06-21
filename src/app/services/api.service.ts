import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  appID = "ab8193583842a8e70045135fe71273c5";
  units = "metric";
  cnt = "";
  url;

  constructor(public http: Http) {
    console.log("Test API");
    this.url = 'https://api.openweathermap.org/data/2.5/forecast?appid='+this.appID+'&units='+this.units+'&cnt='+this.cnt+'&q='
  }

  getMeteo(ville, pays){
    return this.http.get(this.url+ville+','+pays+'.json')
    .pipe(map(res => res.json()));
      
  }

}