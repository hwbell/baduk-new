import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-player',
  templateUrl: './game-player.component.html',
  styleUrls: ['./game-player.component.sass']
})
export class GamePlayerComponent implements OnInit {
  @Input() game: string = "../../assets/games/shin-jinseo.sgf";
  @Input() sgf: string = "../../assets/games/shin-jinseo.sgf";
  constructor() { }

  ngOnInit() {
    console.log(this.game)
  }

}
