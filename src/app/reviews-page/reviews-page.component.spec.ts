import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ReviewsPageComponent } from './reviews-page.component';
import { Text } from './reviews-page.text.js';

describe('ReviewsPageComponent', () => {
  let fixture;
  let compiled;
  let page;
  // let text;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ReviewsPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    // text = Text;
    fixture = TestBed.createComponent(ReviewsPageComponent);
    compiled = fixture.debugElement.nativeElement;
    page = fixture.debugElement.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });

  it('should render the correct elements', () => {
    expect(compiled.querySelector(".page")).toBeTruthy();
    expect(compiled.querySelector("#reviews-page")).toBeTruthy();
    expect(compiled.querySelector(".content")).toBeTruthy();
    expect(compiled.querySelector("h2")).toBeTruthy();
    expect(compiled.querySelector("h5")).toBeTruthy();
  });

  it('should have the text imported and used', () => {
    expect(page.text).toEqual(Text);
    expect(compiled.querySelector("h2").textContent).toBe(Text.page.top.title);
    expect(compiled.querySelector("h5").textContent).toBe(Text.page.top.subtitle);
  });

  it('should render the buttons', () => {
    expect(page.buttons).toEqual([
      {
        text: 'post a review/question',
        route: '/upload'
      }
    ]);

    expect(compiled.querySelector("button")).toBeTruthy();
  })
});
