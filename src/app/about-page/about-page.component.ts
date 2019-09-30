import { Component, OnInit } from "@angular/core";
import { Text } from "./about-page.text";
@Component({
  selector: "app-about-page",
  templateUrl: "./about-page.component.html",
  styleUrls: ["./about-page.component.sass"]
})
export class AboutPageComponent implements OnInit {

  top = Text.page[0];
  sections = Text.page.slice(1);
  links = Text.links;

  constructor() {}

  ngOnInit() {}
}
