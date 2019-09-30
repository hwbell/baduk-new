// Infomation for the about page

// Information to include
//   1. Describe History.
//   2. Describe gameplay briefly.
//   3. Describe how to start playing
//   4. Describe a basic opening
//   5. Describe capturing
//   6. Decribe territory
//   7. Describe Ko
const page = [
  {
    title: `The Game of Go - Baduk - Weiqi`,
    subtitle: `A board game with ancient origins`,
    paragraph: [
      `Go was invented in China more than 2,500 years ago,
  making it the oldest continuously played board game in existence.
  If you are at this site, you probably already know this! For those
  new to the game, I would encourage you to read the wikipedia article
  below. It gives a very good overview of the rules and strategy.
  However, you'll never really get it until you play!`
    ]
  },
  {
    subtitle: "The basics",
    paragraph: [
      `Go is played by two players on a 19 x 19 grid (the board, or 'goban').
    The players alternate turns, placing a piece, or 'stone', on intersecting points of
    the grid. See the diagram below for a basic example of the first few moves of a game.`,
      `The object of the game, and the way a player wins, is to make the most territory on
    the board. Territory is any empty area of the board surrounded by one player at the
    end of the game. The concept of territory is very simple in theory, but very complex
    in practice. For example, a player may gain territory by surrounding and capturing
    the opponent's stones. This may happen many times in any given game. See examples below
    of <a href="#">captured stones vs. surrounded stones</a>.`
    ]
  },
  {
    subtitle: "How can I start playing Go?",
    paragraph: [
      `There are many resources available for playing go nowadays.
    The internet has really changed the way people play go, and anyone can
    learn and study the game in many different ways. We've gathered a list
    of resources for studying  and playing go <a target='_blank' href='/home'>here.</a>
    While this list is by no means comprehensive, we have tried to design it
    as a group of useful starting points for new or weaker players. Send us a
    message if you think we're missing something important!`
    ]
  },
  {
    subtitle: "A basic opening",
    image: ['../assets/images/opening.png'],
    paragraph: [
      `A game of go usually begins similar to the diagram above. Both
    players make moves in 2 of the 4 corners of the board. This is theoretically the
    best way for each player to start with basic areas of control or 'influence'.`
    ]
  },
  {
    subtitle: "The middle game",
    image: ['../assets/images/middle-game.png'],
    paragraph: [
      `Further on in the game, we can see some of the areas of the board are clearly surrounded
    by either black or white. While these areas are not technically territory at this point, they
    will likely become each player's territory at the end of the game.`
    ]
  },
  {
    subtitle: "Territory",
    image: ['../assets/images/territory.png'],
    paragraph: [
      `At the end of a game, a each player's points are counted, and the player with more
      points wins. Each player receives one point for each surrouded empty point on the board,
      marked with <span class="triangle-icon"></span>,
      as well as one point for each captured or dead stone. In this example, there are three dead
      black stones on the board, marked with white triangles. At each of these spots, white would
      recieve 2 points - 1 point of territory and 1 point for the dead stone.`
    ]
  },
  {
    subtitle: "Capturing stones",
    image: ['../assets/images/capture.png'],
    paragraph: [
      `To capture an opponent's stones, you must take all of the stone's liberties.
    Any unoccupied space immediately adjacent to a stone is considered a liberty. So, a stone in
    isolation would have four liberties, as in the above diagram (left). When a stone has one
    liberty remaining, the stone is said to be in 'Atari' (middle). If white were to make a move at
    <span class="triangle-icon"></span>, the black stone would be captured and taken off the board
    (right).`,
    ]
  },
  {
    subtitle: "Dead stones",
    image: ['../assets/images/dead-stones.png'],
    paragraph: [`In many games, stones are effectively captured, but left on the board as 'dead'
    stones or groups. The reason for this is both players recognize they are not forced to play out
    the capture of the stones, and playing out the capture would not make a net difference in score.
    In the upper left example, black would receive 6 points total: 2 dead stones + 4 points of territory.
    In the upper right example, white would receive 7 points total: 3 dead stones + 4 points of territory.
    If this is confusing, don't worry! That's the way it is for everyone at first :)`]
  },
  {
    subtitle: "The Ko rule",
    image: ['../assets/images/ko-rule.png'],
    paragraph: [
      `The rule of ko is very simple. It applies to a situation in which both players could, in theory,
      continue to take the same spot on the board over and over, thus creating a sort of 'glitch in the
      matrix'. To account for this, the Ko rule states that you cannot immediately take a stone in a ko
      position. You must move elsewhere on the board before you can take that spot again. Above (left),
      if black were to take capture white stone by playing at a, the Ko position on the right would result.
      It would seem white could take the black stone by playing at b, but this is exactly why the Ko rule
      exists! If white were allowed to take that stone, and then black allowed to take it again, the game
      position would repeat! This is what the Ko rule prevents. Ko happens a lot in games, so it is
      important to know how to deal with it!`
    ]
  }
];

const links = {
  wiki: {
    text: `read the full wikipedia article`,
    route: `https://en.wikipedia.org/wiki/Go_(game)`
  }
};

export const Text = {
  page,
  links
};
