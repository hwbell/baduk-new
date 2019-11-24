import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
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
import { HttpClientModule } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";

import { Thread } from "../../../classes/thread";
import { NewsArticleFormComponent } from "./news-article-form.component";
import { NewsInfoFormComponent } from "../news-info-form/news-info-form.component";

describe("NewsArticleFormComponent", () => {
  let fixture;
  let compiled;
  let articleForm;
  let testModel;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        HttpClientModule
      ],
      declarations: [NewsArticleFormComponent, NewsInfoFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    // testModel = new Thread(
    //   "Lee Changho wins",
    //   {
    //     file: ""
    //   },
    //   "A come from behind win"
    // );
    fixture = TestBed.createComponent(NewsArticleFormComponent);
    compiled = fixture.debugElement.nativeElement;
    articleForm = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(articleForm).toBeTruthy();
  });

  it("should render the correct elements", () => {
    expect(compiled.querySelector(".btn-outline-primary")).toBeTruthy();
    expect(compiled.querySelector(".form-container")).toBeFalsy();
    expect(compiled.querySelector("app-news-info-form")).toBeFalsy();
  });

  // it("should have the model imported and assigned", () => {
  //   expect(articleForm.model).toEqual(testModel);
  // });

  it("should control submitted state", () => {
    expect(articleForm.submitted).toBe(false);

    // fire the handle submit
    articleForm.onSubmit();
    fixture.detectChanges();
    expect(articleForm.submitted).toBe(true);
  });

  it("should have the right button text", () => {
    let postButton = compiled.querySelector(".btn-outline-primary");
    expect(postButton.textContent).toBe(" Post a news article ");
  });

  it("should toggle formOpen state", () => {
    expect(articleForm.formOpen).toBe(false);

    // fire the toggle function
    articleForm.toggleForm();
    fixture.detectChanges();
    expect(articleForm.formOpen).toBe(true);
    expect(compiled.querySelector(".form-container")).toBeTruthy();
    expect(compiled.querySelector("app-news-info-form")).toBeTruthy();


    // test with button click directly
    let cancelButton = compiled.querySelector(".btn-outline-danger");
    let infoButton = compiled.querySelector(".btn-outline-info");

    expect(cancelButton).toBeTruthy();
    expect(infoButton).toBeTruthy();
    cancelButton.click();
    fixture.detectChanges();
    expect(cancelButton.textContent).toBe(" cancel ");

    expect(articleForm.formOpen).toBe(false);
  });


});
