import { Component, OnInit } from '@angular/core';
import {WclothService} from '../service/wcloth.service';

@Component({
  selector: 'app-wchild',
  templateUrl: './wchild.component.html',
  styleUrls: ['./wchild.component.css']
})
export class WchildComponent implements OnInit {
  Wclothes: any = [];

  constructor(public wclothes: WclothService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadWclothes();
  }
  // tslint:disable-next-line:typedef
  loadWclothes(){
    return this.Wclothes.getBags().subscribe( data => this.Wclothes = data);
  }
}
