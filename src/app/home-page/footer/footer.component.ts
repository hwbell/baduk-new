import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  cards = [
    {
      title: 'Learn',
      text: ['Examine a game', 'Ask a question', 'Analyze with other players'],
      buttonText: 'explore games',
      route: 'reviews'
    },
    {
      title: 'Contribute',
      text: ['Post your reviews', 'Start a discussion', 'Help weaker players'],
      buttonText: 'learn more',
      route: 'about'
    },
    {
      title: 'Improve',
      text: [ 'Think more deeply', 'Explore more games', 'Become a stronger player'],
      buttonText: 'study tools',
      route: 'about'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
