import { Component, OnInit } from '@angular/core';
import {WclothService} from '../service/wcloth.service';
import {MenService} from '../service/men.service';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{
  Men: any = [];
  constructor(public mn: MenService) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadMen();
  }
  // tslint:disable-next-line:typedef
  loadMen(){
    return this.mn.getMen().subscribe( data => this.Men = data);
  }
}

