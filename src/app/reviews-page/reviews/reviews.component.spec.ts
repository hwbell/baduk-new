import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsComponent } from './reviews.component';
import {GameReviewComponent} from '../game-review/game-review.component';
const sampleReviews = [
  {
    type: 'review',
    title: 'Lee Changho vs Gu Li',
    description: 'This is an epic game between two masters!'
  },
  {
    type: 'review',
    title: 'Lee Changho vs Lee Sedol',
    description: 'This is an epic game between a solid player and a complex player!'
  },
  {
    type: 'review',
    title: 'Lee Changho vs Choi Cheolhan',
    description: 'This is an epic game between Choi Chelhan, master of fighting, and Lee Changho, master of calculation!'
  }
];

describe('ReviewsComponent', () => {
  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;
  let compiled, reviews;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ReviewsComponent, GameReviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    // text = Text;
    fixture = TestBed.createComponent(ReviewsComponent);
    compiled = fixture.debugElement.nativeElement;
    reviews = fixture.debugElement.componentInstance;
    reviews.reviews = sampleReviews;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the correct elements', () => {
    expect(compiled.querySelector(".reviews")).toBeTruthy();
    expect(compiled.querySelector(".reviews-title")).toBeTruthy();
    expect(compiled.querySelectorAll("app-game-review").length).toBeTruthy();
  });

  it('should set its data correctly', () => {
    expect(reviews.reviews).toBe(sampleReviews);
  });
});
