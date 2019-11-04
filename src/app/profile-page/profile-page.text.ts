// Infomation for the profile page
// eventually will use a  UserService for this page to fetch the profile info from local storage / server. For now just use some dummy info

// Information to include
//   1. Name
//   2. Rank
//   3. Avatar
//   4. Reviews

const page = [
  {
    name: 'Lee Changho',
    rank: '9p',
    info: `"Stone Buddha" is one of Lee's many nicknames. It derives from the
    fact that he always keeps a straight face and never smiles or frowns during
    a match. The nickname reflects his playing style as well. His reading
    ability is among the best in the world. If he said "I'm going to win by
    1.5 point", then he did so.[citation needed] It gave him an honorable nickname,
    "God of calculation." He does not attack much and never plays "wild Go". He
    often wins by making his opponents think they are winning, only to gradually
    defeat them in the later stages of the game. He rarely kills large groups or
    makes a single move that decides the match. His endgame skill is one of the
    strongest in history.`,
    avatar: 'http://file.tygem.com/updata/bbs/20118/153746110828-nong01.jpg',
    activity: {
      reviews: [{},{},{}],
      comments: [{},{},{},{}],
      articles: [{},{}]
    }, // link to reviews
    links: ["https://en.wikipedia.org/wiki/Lee_Chang-ho", "https://senseis.xmp.net/?YiChangHo"] // link to server pages, or anything else
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
