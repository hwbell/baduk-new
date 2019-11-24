import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsInfoFormComponent } from './news-info-form.component';

describe('NewsInfoFormComponent', () => {
  let component: NewsInfoFormComponent;
  let fixture: ComponentFixture<NewsInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
