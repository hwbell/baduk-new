import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePlayerComponent } from './game-player.component';

describe('GamePlayerComponent', () => {
  let component: GamePlayerComponent;
  let fixture: ComponentFixture<GamePlayerComponent>;
  let compiled;
  let gamePlayer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [RouterTestingModule],
      declarations: [GamePlayerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePlayerComponent);
    compiled = fixture.debugElement.nativeElement;
    gamePlayer = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(gamePlayer).toBeTruthy();
  });

  it('should render the game player', () => {
    const compiled = fixture.debugElement.nativeElement;
    const player = compiled.querySelector('.eidogo-player-auto');
    expect(player).toBeTruthy();
  });

  it('should set the game', () => {
    expect(gamePlayer.game).toBeTruthy();
  });
});
