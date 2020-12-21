import { Component, OnInit } from '@angular/core';
import {WclothesService} from '../service/wclothes.service';

@Component({
  selector: 'app-wclothes',
  templateUrl: './wclothes.component.html',
  styleUrls: ['./wclothes.component.css']
})
export class WclothesComponent {
  displayPic = false;
  sharedValue;

  constructor(private Wclothes: WclothesService){
    this.sharedValue = Wclothes.getSharedValue();
    console.log('Parent-1 ' + this.sharedValue.toString());
  }
}
