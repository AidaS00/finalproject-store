import { Component, OnInit } from '@angular/core';
import {AccessoriesService} from '../service/accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
Accessories: any = [];
  constructor(public as: AccessoriesService) { }

  ngOnInit(): void {
    this.loadAccessories();
  }
  // tslint:disable-next-line:typedef
  loadAccessories(){
    return this.as.getAccessories().subscribe(data => this.Accessories = data);
  }

}
