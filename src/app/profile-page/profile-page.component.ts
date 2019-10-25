import { Component, OnInit } from '@angular/core';
import { Text } from "./profile-page.text.js";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass']
})
export class ProfilePageComponent implements OnInit {
  text = Text;

  constructor() { }

  ngOnInit() {
  }

}
