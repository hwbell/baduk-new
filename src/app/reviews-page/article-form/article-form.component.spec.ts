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
import { ArticleFormComponent } from "./article-form.component";

describe("ArticleFormComponent", () => {
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
    expect(compiled.querySelector(".form-container")).toBeFalsy();
    expect(compiled.querySelector("#file-label")).toBeFalsy();
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

  it("should have the right button text", () => {
    let postButton = compiled.querySelector(".btn-outline-primary");
    expect(postButton.textContent).toBe(" Post a game || question ");
  });

  it("should toggle formOpen state", () => {
    expect(articleForm.formOpen).toBe(false);

    // fire the toggle function
    articleForm.toggleForm();
    fixture.detectChanges();
    expect(articleForm.formOpen).toBe(true);
    expect(compiled.querySelector(".form-container")).toBeTruthy();

    // test with button click directly
    let cancelButton = compiled.querySelector(".btn-outline-danger");

    expect(cancelButton).toBeTruthy();
    cancelButton.click();
    fixture.detectChanges();
    expect(cancelButton.textContent).toBe(" cancel ");

    expect(articleForm.formOpen).toBe(false);
  });

  it("should change the upload button when a file is selected", () => {
    // get the form open
    articleForm.toggleForm();
    fixture.detectChanges();

    let input = document.querySelector('#file');
    expect(input).toBeTruthy();

    let uploadButton = compiled.querySelector(".btn-outline-primary");
    expect(uploadButton).toBeTruthy();
    expect(uploadButton.textContent).toBe(" choose file ");

    const mockFile = new File([''], 'filename', { type: 'text/html' });
    const mockEvt = { target: { files: [mockFile] } };

    spyOn(articleForm, "onFileSelected");
    spyOn(window as any, 'FileReader');
    articleForm.onFileSelected(mockEvt);

    expect(articleForm.onFileSelected).toHaveBeenCalled();
    articleForm.fileSelected = true;
    fixture.detectChanges();
    expect(uploadButton.textContent).toBe(" choose another file ");
  });

  it("should toggle the file label", () => {
    expect(articleForm.fileSelected).toBe(false);

    // get the form open
    articleForm.toggleForm();
    fixture.detectChanges();

    // fire the toggle function
    articleForm.fileSelected = true;
    fixture.detectChanges();
    expect(articleForm.fileSelected).toBe(true);
    expect(compiled.querySelector("#file-label")).toBeTruthy();
  });
});
