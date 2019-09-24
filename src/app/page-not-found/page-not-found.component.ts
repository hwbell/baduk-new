import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent implements OnInit {

  message = `Sorry, it looks like that page can't be found ... `;
  constructor() { }

  ngOnInit() {
  }

}
