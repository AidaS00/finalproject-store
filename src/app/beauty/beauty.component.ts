import { Component, OnInit } from '@angular/core';
import { BeautyService} from '../service/beauty.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {
Beauty: any = [];
  constructor(public bt: BeautyService) { }

  ngOnInit(): void {
  this.loadBeauty();
  }
  // tslint:disable-next-line:typedef
  loadBeauty(){
    return this.bt.getBeauty().subscribe( data => this.Beauty = data);
  }

}
