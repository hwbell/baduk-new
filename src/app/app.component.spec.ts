import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NavigatorComponent } from "./navigator/navigator.component";

describe("AppComponent", () => {
  let fixture;
  let compiled;
  let app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, HeaderComponent, NavigatorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.debugElement.nativeElement;
    app = fixture.debugElement.componentInstance;
  }));

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-app'`, () => {
    expect(app.title).toEqual("Baduk News");
  });

  it("should render title", () => {
    fixture.detectChanges();
    expect(compiled.querySelector("h1")).toBeTruthy();
    expect(compiled.querySelector("h1").textContent).toContain("Baduk News");
  });

  it("should render the header", () => {
    expect(compiled.querySelector("app-header")).toBeTruthy();
  });

  it("should render the router-outlet", () => {
    expect(compiled.querySelector("router-outlet")).toBeTruthy();
  });
});
