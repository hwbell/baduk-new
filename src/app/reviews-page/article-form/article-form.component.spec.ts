import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { Thread } from "../../classes/thread";
import { ArticleFormComponent } from "./article-form.component";

describe("ArticleFormComponent", () => {
  let fixture;
  let compiled;
  let articleForm;
  let testModel;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, NgbModule],
      declarations: [ArticleFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    testModel = new Thread(
      "Lee Changho wins",
      {
        file: ""
      },
      "A come from behind win"
    );
    fixture = TestBed.createComponent(ArticleFormComponent);
    compiled = fixture.debugElement.nativeElement;
    articleForm = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(articleForm).toBeTruthy();
  });

  it("should render the correct elements", () => {
    expect(compiled.querySelector(".btn-outline-primary")).toBeTruthy();
    expect(compiled.querySelector("#collapsedForm")).toBeTruthy();
    // expect(compiled.querySelector(".form")).toBeTruthy();
  });

  it("should have the model imported and assigned", () => {
    expect(articleForm.model).toEqual(testModel);
  });

  it("should control submitted state", () => {
    expect(articleForm.submitted).toBe(false);

    // fire the handle submit
    articleForm.onSubmit();
    fixture.detectChanges();
    expect(articleForm.submitted).toBe(true);
  });

  it("should toggle collapsed state", () => {
    expect(articleForm.isCollapsed).toBe(true);

    // fire the handle submit
    articleForm.toggleCollapse();
    fixture.detectChanges();
    expect(articleForm.isCollapsed).toBe(false);
  });
});
