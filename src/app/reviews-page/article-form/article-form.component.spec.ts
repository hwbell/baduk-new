import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ArticleFormComponent } from './article-form.component';

describe('ArticleFormComponent', () => {
  let fixture;
  let compiled;
  let articleForm;
  // let text;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ArticleFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    // text = Text;
    fixture = TestBed.createComponent(ArticleFormComponent);
    compiled = fixture.debugElement.nativeElement;
    articleForm = fixture.debugElement.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(articleForm).toBeTruthy();
  });

  it('should render the correct elements', () => {
    expect(compiled.querySelector(".btn-primary")).toBeTruthy();
    expect(compiled.querySelector(".collapse")).toBeTruthy();
    // expect(compiled.querySelector(".form")).toBeTruthy();
  });

});
