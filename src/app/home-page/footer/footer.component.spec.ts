import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let footer;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    footer = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should render content`, () => {
    expect(compiled.querySelector(`#footer-content`)).toBeTruthy();
    expect(compiled.querySelectorAll('.footer-card').length).toBe(3);
  });

  it('should render cards with button and text', () => {
    const cards = [
      {
        title: 'Learn',
        text: ['Examine a game', 'Ask a question', 'Analyze with other players'],
        buttonText: 'explore games',
        route: 'reviews'
      },
      {
        title: 'Contribute',
        text: ['Post your reviews', 'Start a discussion', 'Help weaker players'],
        buttonText: 'learn more',
        route: 'about'
      },
      {
        title: 'Improve',
        text: [ 'Think more deeply', 'Explore more games', 'Become a stronger player'],
        buttonText: 'study tools',
        route: 'about'
      }
    ];
    // check that it gets assigned correctly
    expect(footer.cards).toEqual(cards)

    // check the lists are actually rendered with the cards array
    expect(compiled.querySelectorAll('.footer-card').length).toBe(3);
    expect(compiled.querySelectorAll('ul').length).toBe(3);

  })
});
