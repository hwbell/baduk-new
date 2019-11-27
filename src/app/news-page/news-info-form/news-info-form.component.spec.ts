import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import { NewsInfoFormComponent } from "./news-info-form.component";

describe("NewsInfoFormComponent", () => {
  let component: NewsInfoFormComponent;
  let fixture: ComponentFixture<NewsInfoFormComponent>;
  let compiled;
  let newsInfoForm;
  let testModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsInfoFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInfoFormComponent);
    compiled = fixture.debugElement.nativeElement;
    newsInfoForm = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(newsInfoForm).toBeTruthy();
  });

  it("should contain the correct elements", () => {

    // the commented out lines below need to pass for this component
      // fix the ng-template unit testing in this file
      // see https://stackoverflow.com/questions/55927441/how-can-i-test-a-modals-elements-with-ng-template-and-the-action-that-triggers

    // expect(compiled.querySelector("ng-template")).toBeTruthy();
    // expect(compiled.querySelector(".modal-header")).toBeTruthy();
    // expect(compiled.querySelector(".modal-title")).toBeTruthy();
    // expect(compiled.querySelector(".close")).toBeTruthy();
    // expect(compiled.querySelector(".modal-body")).toBeTruthy();

    expect(compiled.querySelector(".btn-outline-primary")).toBeTruthy();

  });

  it("should hide / show the modal content", () => {
    // initially hidden
    expect(newsInfoForm.formOpen).toBe(false);

    // open it
    let openButton = compiled.querySelector(".btn-outline-primary");
    openButton.click();
    fixture.detectChanges();

    expect(newsInfoForm.formOpen).toBe(true);

    // close it
    // let closeButton = compiled.querySelector(".close");
    // expect(compiled.querySelector(".close")).toBeFalsy();
    // closeButton.click();
    // fixture.detectChanges();

    // expect(newsInfoForm.formOpen).toBe(false);
  });
});
