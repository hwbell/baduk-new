import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Profile} from '../classes/profile';

// import { Observable } from "rxjs/";
@Injectable({
  providedIn: "root"
})
export class ServerService {
  defaultUserProfile = new Profile(
    'Lee Changho',
    '9p',
    `"Stone Buddha" is one of Lee's many nicknames. It derives from the
    fact that he always keeps a straight face and never smiles or frowns during
    a match. The nickname reflects his playing style as well. His reading
    ability is among the best in the world. If he said "I'm going to win by
    1.5 point", then he did so.[citation needed] It gave him an honorable nickname,
    "God of calculation." He does not attack much and never plays "wild Go". He
    often wins by making his opponents think they are winning, only to gradually
    defeat them in the later stages of the game. He rarely kills large groups or
    makes a single move that decides the match. His endgame skill is one of the
    strongest in history.`,
    'http://file.tygem.com/updata/bbs/20118/153746110828-nong01.jpg',
    {
      reviews: [{},{},{}],
      comments: [{},{},{},{}],
      articles: [{},{}]
    }, // link to reviews
    ["https://en.wikipedia.org/wiki/Lee_Chang-ho", "https://senseis.xmp.net/?YiChangHo"] // link to server pages, or anything else
  )

  serverUrl = 'http://localhost:3000/collections/all/date/1';

  getData() {
    return this.http.get(this.serverUrl);
  }

  getUser() {

    // get the data from the server user, if there is a user signed in

    // update with data present/absent
    if (false) {
      return null;
    } else {
      return this.defaultUserProfile;
    }
  }

  constructor(private http: HttpClient) {}

}
