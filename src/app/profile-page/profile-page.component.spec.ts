import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ProfilePageComponent } from "./profile-page.component";
import { ProfileFormComponent } from "./profile-form/profile-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";

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
      declarations: [ProfilePageComponent, ProfileFormComponent, LoginFormComponent]
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

    expect(page.haveUserProfile).toBe(false);
    expect(compiled.querySelector("#logged-in-content")).toBeFalsy();

    expect(compiled.querySelector("#logged-out-content")).toBeTruthy();
    expect(compiled.querySelector("app-login-form")).toBeTruthy();


    // [".page", "#profile-title", "#profile-page", ".content", ".text-content", "h2", "app-profile-form"].forEach(
    //   selector => {
    //     expect(compiled.querySelector(selector)).toBeTruthy();
    //   }
    // );
  });

  // it("should have the text imported and used", () => {

  //   // set the logged in

  //   expect(page.text).toEqual(Text);

  //   // info containers
  //   expect(compiled.querySelector("h2").textContent).toContain(Text.page[0].name);

  //   // activity indicators
  //   expect(compiled.querySelector("#profile-activity")).toBeTruthy();
  //   expect(compiled.querySelectorAll(".activity-stat").length).toBe(3);
  //   expect(compiled.querySelector("i")).toBeTruthy();
  //   expect(compiled.querySelector(".fa-leaf")).toBeTruthy();

  //   expect(compiled.querySelector("#profile-info").textContent).toContain(Text.page[0].info);
  //   expect(compiled.querySelector("#profile-image").src).toBeTruthy();

  //   // external links
  //   let links = compiled.querySelector("#profile-links").querySelectorAll("a");
  //   expect(links).toBeTruthy();
  //   expect(links.length).toBe(2);

  //   expect(links["0"].href).toBe(Text.page[0].links[0]);
  //   expect(links["1"].href).toBe(Text.page[0].links[1]);

  // });

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
