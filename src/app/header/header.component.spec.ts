import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderComponent } from "./header.component";
import { NavigatorComponent } from "../navigator/navigator.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent, NavigatorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(`should render the navigator`, () => {
    const navigator = compiled.querySelector("app-navigator");
    expect(navigator).toBeTruthy();
  });

  it(`should render the title`, () => {
    const navigator = compiled.querySelector("h1");
    expect(navigator).toBeTruthy();
  });

});
