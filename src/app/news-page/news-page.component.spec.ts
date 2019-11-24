import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NewsArticleFormComponent } from "./news-article-form/news-article-form.component";
import { NewsInfoFormComponent } from "./news-info-form/news-info-form.component";

import { NewsPageComponent } from "./news-page.component";
import { GamePlayerComponent } from "../game-player/game-player.component";

import { Text } from "./news-page.text.js";

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

describe("NewsPageComponent", () => {
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
      declarations: [
        NewsPageComponent,
        NewsArticleFormComponent,
        NewsInfoFormComponent,
        GamePlayerComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // text = Text;
    fixture = TestBed.createComponent(NewsPageComponent);
    compiled = fixture.debugElement.nativeElement;
    page = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(page).toBeTruthy();
  });

  it("should render the correct elements", () => {
    expect(compiled.querySelector(".page")).toBeTruthy();
    expect(compiled.querySelector("#news-page")).toBeTruthy();
    expect(compiled.querySelector(".content")).toBeTruthy();
    expect(compiled.querySelector("h2")).toBeTruthy();
    expect(compiled.querySelector("h5")).toBeTruthy();
    // expect(compiled.querySelector("app-news")).toBeTruthy();
    expect(compiled.querySelector("app-news-article-form")).toBeTruthy();
  });

  it("should have the text imported and used", () => {
    expect(page.text).toEqual(Text);
    expect(compiled.querySelector("h2").textContent).toBe(Text.page.top.title);
    expect(compiled.querySelector("h5").textContent).toBe(
      Text.page.top.subtitle
    );
  });

});
