import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ProfilePageComponent } from "./profile-page.component";

import { Text } from "./profile-page.text.js";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from "@angular/material/expansion";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from "@angular/material";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";

describe("ProfilePageComponent", () => {
  let fixture;
  let compiled;
  let page;
  // let text;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        NgbModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        MatExpansionModule,
        HttpClientModule
      ],
      declarations: [ProfilePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    // text = Text;
    fixture = TestBed.createComponent(ProfilePageComponent);
    compiled = fixture.debugElement.nativeElement;
    page = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(page).toBeTruthy();
  });

  it("should render the correct elements", () => {
    [".page", "#profile-page", ".content", ".text-content", "h2", "h5"].forEach(
      selector => {
        expect(compiled.querySelector(selector)).toBeTruthy();
      }
    );
  });

  it("should have the text imported and used", () => {
    expect(page.text).toEqual(Text);
    expect(compiled.querySelector("h2").textContent).toContain(Text.page[0].name);
    expect(compiled.querySelector("h5").textContent).toContain(Text.page[0].rank);
    expect(compiled.querySelector("#profile-info").textContent).toContain(Text.page[0].info);
    expect(compiled.querySelector("#profile-image").src).toBeTruthy();
  });

  // it("should render the buttons", () => {
  //   expect(page.links).toEqual([
  //     {
  //       text: "post a review/question",
  //       route: "/upload"
  //     }
  //   ]);

  //   // expect(compiled.querySelector("button")).toBeTruthy();
  // });
});
