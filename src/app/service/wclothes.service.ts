import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Wclothes} from '../wclothes';

@Injectable({
  providedIn: 'root'
})
export class WclothesService {
  sharedValue: any;
  constructor(){
    console.log('Shared Service initialised');
    this.sharedValue = [{img: '/assets/img/pic1.jpg' , name: 'GG Marmontt matelasse', price: '1500$'},
      {img: '/assets/img/pic2.jpg', name: 'GG Shirt ', price: '1000$'},
      {img: '/assets/img/pic3.jpg', name: 'White jacket GG', price: '890$'},
      {img: '/assets/img/pic4.jpg', name: 'Striped Red Skirt ', price: '960$'},
      {img: '/assets/img/pic5.jpg', name: 'GG Red Vist', price: '1200$'},
      {img: '/assets/img/pic6.jpg', name: 'Jeans', price: '600$'}] ;
    console.log(this.sharedValue);
  }
  // tslint:disable-next-line:typedef
  static getSharedValue() {}

  // tslint:disable-next-line:typedef
  public  getSharedValue() {
    return this.sharedValue;
  }

}
