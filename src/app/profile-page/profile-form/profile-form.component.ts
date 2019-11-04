import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Profile } from '../../../classes/profile';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.sass']
})
export class ProfileFormComponent {

  profile = new Profile(
    'Lee Changho',
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
    '9p',
    'http://file.tygem.com/updata/bbs/20118/153746110828-nong01.jpg',
    {
      reviews: [{},{},{}],
      comments: [{},{},{},{}],
      articles: [{},{}]
    }, // link to reviews
    ["https://en.wikipedia.org/wiki/Lee_Chang-ho", "https://senseis.xmp.net/?YiChangHo"] // link to server pages, or anything else

  );
  formOpen = false;
  submitted = false;

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  onSubmit() {
    this.submitted = true;
  }

  open(content) {
    this.formOpen = true;
    this.modalService.open(content, {centered: true, ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.formOpen = false;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.formOpen = false;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
