import { Component, OnInit, Output } from '@angular/core';
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

  reviews = [
    {
      type: 'review',
      title: 'Lee Changho vs Gu Li',
      description: 'This is an epic game between two masters!'
    },
    {
      type: 'review',
      title: 'Lee Changho vs Lee Sedol',
      description: 'This is an epic game between a solid player and a complex player!'
    },
    {
      type: 'review',
      title: 'Lee Changho vs Choi Cheolhan',
      description: 'This is an epic game between Choi Chelhan, master of fighting, and Lee Changho, master of calculation!'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
