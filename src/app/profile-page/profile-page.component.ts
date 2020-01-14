import { Component, OnInit, Input } from '@angular/core';
import { Text } from "./profile-page.text.js";
import { ServerService } from 'src/services/server.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.sass'],
  providers: [ServerService]
})
export class ProfilePageComponent implements OnInit {
  // start out with no user
  haveUserProfile = false;

  // get the profile from the ServerService


  text = Text;
  config = null;
  user = {
    name: 'jeff',
    email: 'jeff@markmail.com',
    password: 'lasangahog',
    rank: '8d'
  }

  showUser() {
    this.server.getUser(this.user)
      .subscribe((data) => {
        this.config = {
          profile: data
        };
        console.log(this.config);

      });
  }


  constructor(private server: ServerService) {}

  ngOnInit() {
    this.showUser();
  }

}
