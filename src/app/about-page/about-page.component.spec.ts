import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { AboutPageComponent } from './about-page.component';

const text = {
  title: 'The Game of Go',
  subtitle: `A board game with ancient origins`,
  paragraph: `Go was invented in China more than 2,500 years ago,
  making it the oldest continuously played board game in existence.
  If you are at this site, you probably already know this! For those
  new to the game, I would encourage you to read the wikipedia article
  below. It gives a very good overview of the rules and strategy.
  However, you'll never really get it until you play!`,
  links: {
    wiki: {
      text: 'read the full wikipedia article',
      route: 'https://en.wikipedia.org/wiki/Go_(game)'
    },
  }
}
describe('AboutPageComponent', () => {
  let fixture;
  let compiled;
  let page;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AboutPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent);
    compiled = fixture.debugElement.nativeElement;
    page = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(page).toBeTruthy();
  });

  it('should render the correct elements', () => {
    expect(compiled.querySelector('.page')).toBeTruthy();
    expect(compiled.querySelector('.about-page')).toBeTruthy();
  });

  it('should render the title, subtitle, and top paragraph with wiki link', () => {
    expect(page.title).toBe(text.title);
    expect(compiled.querySelector('h2')).toBeTruthy();
    expect(compiled.querySelector('h2').textContent).toContain(text.title);

    expect(page.subtitle).toBe(text.subtitle);
    expect(compiled.querySelector('h5')).toBeTruthy();
    expect(compiled.querySelector('h5').textContent).toContain(text.subtitle);

    expect(page.paragraph).toBe(text.paragraph);
    expect(compiled.querySelector('p')).toBeTruthy();
    expect(compiled.querySelector('p').textContent).toContain(text.paragraph);

    expect(page.links).toEqual(text.links);
    expect(compiled.querySelector('#wiki-link')).toBeTruthy();
    expect(compiled.querySelector('#wiki-link').textContent).toContain(text.links.wiki.text);

  });


});
