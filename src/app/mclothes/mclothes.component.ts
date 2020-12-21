import { Component, OnInit } from '@angular/core';
import {MclothesService} from '../service/mclothes.service';

class Mclothes {
}

@Component({
  selector: 'app-mclothes',
  templateUrl: './mclothes.component.html',
  styleUrls: ['./mclothes.component.css']
})
export class MclothesComponent implements OnInit {
  displayPic = false;
  Mclothes: Mclothes;

  constructor(public mc: MclothesService) { }

  ngOnInit(): void {
    this.loadMclothes();
  }
  // tslint:disable-next-line:typedef
  loadMclothes(){
    return this.mc.getMclothes().subscribe( data => this.Mclothes = data);
    }
  }

