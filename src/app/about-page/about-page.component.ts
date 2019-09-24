import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.sass"]
})
export class AboutPageComponent implements OnInit {
  title = `The Game of Go`;
  subtitle = `A board game with ancient origins`;
  paragraph = `Go was invented in China more than 2,500 years ago,
  making it the oldest continuously played board game in existence.
  If you are at this site, you probably already know this! For those
  new to the game, I would encourage you to read the wikipedia article
  below. It gives a very good overview of the rules and strategy.
  However, you'll never really get it until you play!`

  links = {
    wiki: {
      text: 'read the full wikipedia article',
      route: 'https://en.wikipedia.org/wiki/Go_(game)'
    },
  };

  constructor() {}

  ngOnInit() {}
}
