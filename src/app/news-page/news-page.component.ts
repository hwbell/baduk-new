import { Component, OnInit, Output } from '@angular/core';
import { Text } from "./news-page.text.js";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.sass']
})
export class NewsPageComponent implements OnInit {

  text = Text;

  news = [
    {
      id: '23fg3g5g435315t3',
      type: 'article',
      title: 'Lee Changho vs Gu Li',
      game: '../../assets/games/shin-jinseo.sgf',
      description: 'This is an epic game between two masters!',
      comments: [
        {
          user: 'godofgo',
          text: 'I remember watching this game live on youtube.'
        }
      ]
    },
    {
      id: '23fg3g5g4wcecw35315t3',
      type: 'article',
      title: 'Lee Changho vs Lee Sedol',
      game: '../../assets/games/shin-jinseo.sgf',
      description: 'This is an epic game between a solid player and a complex player!',
      comments: [
        {
          user: 'mogget',
          text: '@ B42 - what about c6 instead? seems better / sente?'
        }
      ]
    },
    {
      id: 'dih923dy3098d32',
      type: 'article',
      title: 'Lee Changho vs Choi Cheolhan',
      game: '../../assets/games/shin-jinseo.sgf',
      description: 'This is an epic game between Choi Chelhan, master of fighting, and Lee Changho, master of calculation!',
      comments: [
        {
          user: 'skootermarm',
          text: `@ W23 - is this a joseki move?`
        },
        {
          user: 'markymark',
          text: `@ W43 - This seems really overconentrated.`
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
