import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GameReviewComponent } from "./game-review.component";
import { GamePlayerComponent } from "../../game-player/game-player.component";

const sampleReview = {
  id: '89e98chajjaldn',
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
      imports: [],
      declarations: [GameReviewComponent, GamePlayerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    // text = Text;
    fixture = TestBed.createComponent(GameReviewComponent);
    compiled = fixture.debugElement.nativeElement;
    review = fixture.debugElement.componentInstance;
    review.gameReview = sampleReview;
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
  });

  it("should set the gameReview id properly", () => {
    // set the selector
    review.selector = sampleReview.id;
    fixture.detectChanges();

    expect(compiled.querySelector("#game-" + sampleReview.id)).toBeTruthy();
  });
});
