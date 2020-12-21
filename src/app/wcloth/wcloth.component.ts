import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WclothService} from '../service/wcloth.service';

@Component({
  selector: 'app-wcloth',
  templateUrl: './wcloth.component.html',
  styleUrls: ['./wcloth.component.css']
})
export class WclothComponent{
  sharedValue;

  constructor(private Wcloth: WclothService){
    this.sharedValue = Wcloth.getSharedValue();
    console.log('Parent-1 ' + this.sharedValue.toString());
  }
}
