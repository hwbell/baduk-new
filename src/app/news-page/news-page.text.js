const external = {
  wiki: "<a href='study'></a>"
}

const page = {
  top: {
    title: `Recent news in the Go world`,
    subtitle: `read about what's happening in Go, or share an article`,
    paragraph: [`The news on GoShare is a mix of articles posted by the site creators and
    the users on the site. Any registered user can post a news article. If you'd like to post
    a game review or question, please post in the reviews page.`,
  ]
  },
  middle: {
    subtitle: 'learn more by asking questions',
    paragraph: [`Nobody can learn go alone! Everyone needs the input of stronger players,
    especially when learning basic strategy and sequences. Asking questions, no matter how
    simple, is strongly encouraged! Players who opt into email alerts will see that a new
    question or game has been posted, and you'll get feedback from the community in no time!`]
  },
  bottom: {
    subtitle: 'How do I upload a game?',
    paragraph: [`Almost any program that replays a go game will have the option to save the game
    in .sgf file format. The editors in all the popular go servers support this. Simply save a copy
    of the game and upload it <a href="#">here</a>. You will have to <a href="#">sign up</a> first, although
    this will only take a few seconds.`]
  }
};
const links = {
  wiki: {
    text: `read the full wikipedia article`,
    route: `https://en.wikipedia.org/wiki/Go_(game)`
  }
};

export const Text = {
  page,
  links
}
