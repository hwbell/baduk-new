import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.sass']
})
export class NavigatorComponent implements OnInit {
  links = [ 'home', 'about', 'reviews', 'news' ];
  constructor() { }

  ngOnInit() {
  }

}
