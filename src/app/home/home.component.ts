import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  num1 = 0.8;
  num2 = 0.7;
  constructor() { }

  ngOnInit(): void {
  }

}
