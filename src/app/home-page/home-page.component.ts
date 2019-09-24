import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  title = 'Welcome to GoShare';
  subtitle = `a forum for Go players of all strengths to analyze games,
  ask & answer questions, and delve more deeply into the fascinating game of Go`;

  buttons = [
    {
      text: 'What is go?',
      route: 'about'
    },
    {
      text: 'Post a review',
      route: 'reviews'
    },
    {
      text: 'Go news',
      route: 'news'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
