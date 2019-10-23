import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-game-review",
  templateUrl: "./game-review.component.html",
  styleUrls: ["./game-review.component.sass"]
})
export class GameReviewComponent implements OnInit {

  @Input() selector: string;

  @Input() gameReview: {
    id: string;
    type: string;
    title: string;
    game: string,
    description: string;
  };

  @Input() sgf: string;

  constructor() {}

  // setSgfContent () {
  //   console.log(this.selector)
  //   let el = document.querySelector('#23fg3g5g435315t3')
  //   el.setAttribute('sgf', this.gameReview.game);
  // }

  ngOnInit() {
    // console.log(document.querySelector('.eidogo-player-auto'))
    // this.setSgfContent();
  }
}
