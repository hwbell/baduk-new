import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GameReviewComponent } from "./game-review.component";
import { GamePlayerComponent } from "../../game-player/game-player.component";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const sampleReview = {
  id: "89e98chajjaldn",
  type: "review",
  title: "Lee Changho vs Choi Cheolhan",
  description:
    "This is an epic game between Choi Chelhan, master of fighting, and Lee Changho, master of calculation!"
};

describe("GameReviewComponent", () => {
  let component: GameReviewComponent;
  let fixture: ComponentFixture<GameReviewComponent>;
  let compiled, review;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
      declarations: [GameReviewComponent, GamePlayerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    // text = Text;
    fixture = TestBed.createComponent(GameReviewComponent);
    compiled = fixture.debugElement.nativeElement;
    review = fixture.debugElement.componentInstance;
    review.gameReview = sampleReview;
    // set the selector
    review.selector = sampleReview.id;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(review).toBeTruthy();
  });

  it("should contain the correct elements", () => {
    expect(compiled.querySelector(".game-review")).toBeTruthy();
    expect(compiled.querySelector(".review-title")).toBeTruthy();
    expect(compiled.querySelector(".review-description")).toBeTruthy();
    expect(compiled.querySelector(".eidogo-player-auto")).toBeTruthy();
    expect(compiled.querySelector("#user-comments")).toBeTruthy();
    expect(compiled.querySelector(".review-comment")).toBeTruthy();
    expect(compiled.querySelector(".comment-input")).toBeTruthy();
  });

  it("should set the gameReview id properly", () => {
    expect(compiled.querySelector("#game-" + sampleReview.id)).toBeTruthy();
  });

  it("should set the sgf to the player", () => {
    fixture.detectChanges();
    expect(review.gameReview).toBeTruthy();
    // let player = document.querySelector('.eidogo-player-auto');
    // let sgf = player.attributes[3]
  });

  // test the initial state and the toggling here
  it("should toggle the expanded boolean", () => {
    // should start out false
    expect(review.expanded).toBe(false);

    let game = compiled.querySelector(".eidogo-player-auto");
    expect(game).toBeTruthy();
    expect(game["hidden"]).toBe(true);

    // toggle it manually
    review.toggleExpanded();
    fixture.detectChanges();
    expect(review.expanded).toBe(true);
    // toggle it back manually to false
    review.toggleExpanded();
    fixture.detectChanges();
    expect(review.expanded).toBe(false);

    // click the div directly
    let reviewDiv = compiled.querySelector(".game-review");
    reviewDiv.click();
    fixture.detectChanges();
    expect(review.expanded).toBe(true);
    expect(game["hidden"]).toBe(false);
  });
});
