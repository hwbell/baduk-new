import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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

import { Profile } from "../../../classes/profile";
import { ProfileFormComponent } from "./profile-form.component";


describe("ProfileFormComponent", () => {
  let fixture;
  let compiled;
  let profileForm;
  let testProfile;

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
        HttpClientModule,
      ],
      declarations: [ProfileFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {

    testProfile = new Profile(
      'Lee Changho',
      `"Stone Buddha" is one of Lee's many nicknames. It derives from the
      fact that he always keeps a straight face and never smiles or frowns during
      a match. The nickname reflects his playing style as well. His reading
      ability is among the best in the world. If he said "I'm going to win by
      1.5 point", then he did so.[citation needed] It gave him an honorable nickname,
      "God of calculation." He does not attack much and never plays "wild Go". He
      often wins by making his opponents think they are winning, only to gradually
      defeat them in the later stages of the game. He rarely kills large groups or
      makes a single move that decides the match. His endgame skill is one of the
      strongest in history.`,
      '9p',
      'http://file.tygem.com/updata/bbs/20118/153746110828-nong01.jpg',
      {
        reviews: [{},{},{}],
        comments: [{},{},{},{}],
        articles: [{},{}]
      }, // link to reviews
      ["https://en.wikipedia.org/wiki/Lee_Chang-ho", "https://senseis.xmp.net/?YiChangHo"] // link to server pages, or anything else

    );
    fixture = TestBed.createComponent(ProfileFormComponent);
    compiled = fixture.debugElement.nativeElement;
    profileForm = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(profileForm).toBeTruthy();
  });

  it("should render the correct elements", () => {
    expect(compiled.querySelector(".btn-outline-info")).toBeTruthy();
    expect(compiled.querySelector(".form-container")).toBeFalsy();
    expect(compiled.querySelector("#avatar-label")).toBeFalsy();
  });

  it("should have the model imported and assigned", () => {
    expect(profileForm.profile.name).toBe(testProfile.name);
  });

  it("should control submitted state", () => {
    expect(profileForm.submitted).toBe(false);

    // fire the handle submit
    profileForm.onSubmit();
    fixture.detectChanges();
    expect(profileForm.submitted).toBe(true);
  });

  it("should have the right button text", () => {
    let editButton = compiled.querySelector(".btn-outline-info");
    expect(editButton.textContent).toContain("edit profile");
  });

  it("should toggle formOpen state", () => {
    expect(profileForm.formOpen).toBe(false);

    // fire the open function
    let editButton = compiled.querySelector(".btn-outline-info");
    editButton.click();
    fixture.detectChanges();
    expect(profileForm.formOpen).toBe(true);
  });

  // it("should change the upload button when a file is selected", () => {
  //   // get the form open
  //   profileForm.toggleForm();
  //   fixture.detectChanges();

  //   let input = document.querySelector('#file');
  //   expect(input).toBeTruthy();

  //   let uploadButton = compiled.querySelector(".btn-outline-primary");
  //   expect(uploadButton).toBeTruthy();
  //   expect(uploadButton.textContent).toBe(" choose file ");

  //   const mockFile = new File([''], 'filename', { type: 'text/html' });
  //   const mockEvt = { target: { files: [mockFile] } };

  //   spyOn(profileForm, "onFileSelected");
  //   spyOn(window as any, 'FileReader');
  //   profileForm.onFileSelected(mockEvt);

  //   expect(profileForm.onFileSelected).toHaveBeenCalled();
  //   profileForm.fileSelected = true;
  //   fixture.detectChanges();
  //   expect(uploadButton.textContent).toBe(" choose another file ");
  // });

  // it("should toggle the file label", () => {
  //   expect(profileForm.fileSelected).toBe(false);

  //   // get the form open
  //   profileForm.toggleForm();
  //   fixture.detectChanges();

  //   // fire the toggle function
  //   profileForm.fileSelected = true;
  //   fixture.detectChanges();
  //   expect(profileForm.fileSelected).toBe(true);
  //   expect(compiled.querySelector("#file-label")).toBeTruthy();
  // });
});
