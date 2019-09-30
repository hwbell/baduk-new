import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AboutPageComponent } from "./about-page.component";
import { Text } from "./about-page.text";

describe("AboutPageComponent", () => {
  let fixture;
  let compiled;
  let page;
  let top;
  let links;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AboutPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    console.log(Text.links)
    top = Text.page[0];
    links = Text.links;

    fixture = TestBed.createComponent(AboutPageComponent);
    compiled = fixture.debugElement.nativeElement;
    page = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(page).toBeTruthy();
  });

  it("should render the correct elements", () => {
    expect(compiled.querySelector(".page")).toBeTruthy();
    expect(compiled.querySelector("#about-page")).toBeTruthy();
    expect(compiled.querySelector(".content")).toBeTruthy();
  });

  it("should render the title, subtitle, and top paragraph with wiki link", () => {
    expect(compiled.querySelector("h2")).toBeTruthy();
    expect(compiled.querySelector("h2").textContent).toContain(
      top.title
    );

    expect(compiled.querySelector("h5")).toBeTruthy();
    expect(compiled.querySelector("h5").textContent).toContain(
      top.subtitle
    );

    expect(compiled.querySelector("p")).toBeTruthy();
    expect(compiled.querySelector("p").textContent).toContain(
      top.paragraph
    );

    expect(compiled.querySelector("#wiki-link")).toBeTruthy();
    expect(compiled.querySelector("#wiki-link").textContent).toContain(
      links.wiki.text
    );
  });
});
