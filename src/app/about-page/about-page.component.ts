import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.sass"]
})
export class AboutPageComponent implements OnInit {
  title = `About Page works!`;
  constructor() {}

  ngOnInit() {}
}
