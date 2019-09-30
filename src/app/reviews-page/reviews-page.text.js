const external = {
  wiki: "<a href='study'></a>"
}

const page = {
  top: {
    title: `Game Review Center`,
    subtitle: `analysis and discussions posted by the community`,
    paragraph: [`Post a review, ask a question, or explore games reviewed by other players!
    At GoShare, reviews are not restricted to high dan players. Although they
    obviously provide the best analysis and reviews, this site was designed
    to be wide open to the entire community of go players. This way more players
    can connect across ranks and learn from one another more easily. All you need
    to post a review is a .sgf file to upload, and a description of your review or question.`]
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
