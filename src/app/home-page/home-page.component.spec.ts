import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomePageComponent } from "./home-page.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("HomePageComponent", () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let page;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomePageComponent, FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    page = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create`, () => {
    expect(component).toBeTruthy();
  });

  it(`should render the correct elements`, () => {
    expect(compiled.querySelector(".page")).toBeTruthy();
    expect(compiled.querySelector("#home-page")).toBeTruthy();
    expect(compiled.querySelector(".content")).toBeTruthy();
  });

  it(`should render title and subtitle`, () => {
    expect(compiled.querySelector(`h2`)).toBeTruthy();
    expect(compiled.querySelector(`h5`)).toBeTruthy();
    expect(compiled.querySelector(`h2`).textContent).toContain(page.title);
    expect(compiled.querySelector(`h5`).textContent).toContain(page.subtitle);
  });

  it('should render the buttons', () => {
    expect(compiled.querySelectorAll(`button`).length).toBe(6);
  })

  it('should render the footer', () => {
    expect(compiled.querySelector(`app-footer`)).toBeTruthy();
  })
});
