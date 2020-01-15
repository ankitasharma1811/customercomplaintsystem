import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  loc: string;
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }
  locateme() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.loc = resp.coords.latitude + ' and ' + resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
