import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-game-review",
  templateUrl: "./game-review.component.html",
  styleUrls: ["./game-review.component.sass"]
})
export class GameReviewComponent implements OnInit {

  game = "";
  expanded = false;

  icons = [
    {
      class: `go-board-icon`
    },
    {
      class: `fas fa-file-download`
    },
    {
      class: `fas fa-question`
    },

  ];

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

  toggleExpanded() {
    this.expanded = !this.expanded;
  }

  ngOnInit() {
    console.log(`inititalizing game review ${this.gameReview.game}`)
  }
}
