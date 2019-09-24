import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.sass"]
})
export class NavigatorComponent implements OnInit {
  links = [
    {
      route: `home`,
      icon: `fas fa-home`
    },
    {
      route: `about`,
      icon: `fas fa-info-circle`
    },
    {
      route: `reviews`,
      icon: `go-board-icon`
    },
    {
      route: `news`,
      icon: `far fa-newspaper`
    }
  ];
  constructor() {}

  ngOnInit() {}
}
