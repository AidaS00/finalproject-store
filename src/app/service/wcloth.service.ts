import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WclothService {
  sharedValue: any;
  constructor(){
    console.log('Shared Service initialised');
    this.sharedValue = [{img: '/assets/img/bag1.jpg' , name: 'Dionysus small shoulder bag', price: '1790$'},
      {img: '/assets/img/bag2.jpg', name: 'GG Marmont mini sequin bucket bag ', price: '1150$'},
      {img: '/assets/img/bag3.jpg', name: 'GG Marmont mini bucket bag', price: '980$'},
      {img: '/assets/img/bag4.jpg', name: 'Jackie 1961 small hobo bag ', price: '1980$'},
      {img: '/assets/img/bag5.jpg', name: 'Houndstooth and stripe tote with Interlocking G', price: '1980$'},
      {img: '/assets/img/bag6.jpg', name: 'Gucci Horsebit 1955 small shoulder bag', price: '1590'}] ;
    console.log(this.sharedValue);
  }
  // tslint:disable-next-line:typedef
  static getSharedValue() {}

  // tslint:disable-next-line:typedef
  public  getSharedValue() {
    return this.sharedValue;
  }

}
