import { Component, OnInit } from '@angular/core';
import { Text } from "./reviews-page.text";
@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.sass']
})
export class ReviewsPageComponent implements OnInit {

  text = Text;

  links = [
    {
      text: 'post a review/question',
      route: '/upload'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
