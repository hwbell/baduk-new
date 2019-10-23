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
      id: '23fg3g5g435315t3',
      type: 'review',
      title: 'Lee Changho vs Gu Li',
      game: '../../assets/games/shin-jinseo.sgf',
      description: 'This is an epic game between two masters!'
    },
    {
      id: '23fg3g5g4wcecw35315t3',
      type: 'review',
      title: 'Lee Changho vs Lee Sedol',
      game: '../../assets/games/shin-jinseo.sgf',
      description: 'This is an epic game between a solid player and a complex player!'
    },
    {
      id: 'dih923dy3098d32',
      type: 'review',
      title: 'Lee Changho vs Choi Cheolhan',
      game: '../../assets/games/shin-jinseo.sgf',
      description: 'This is an epic game between Choi Chelhan, master of fighting, and Lee Changho, master of calculation!'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
