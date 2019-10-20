import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-review',
  templateUrl: './game-review.component.html',
  styleUrls: ['./game-review.component.sass']
})
export class GameReviewComponent implements OnInit {
  @Input() gameReview: {
    type: string,
    title: string,
    // game: File,
    description: string
  }

  constructor() { }

  ngOnInit() {
  }

}
