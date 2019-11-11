import { Profile } from "./profile";

describe("Thread", () => {
  it("should create an instance", () => {
    expect(
      new Profile(
        "Lee Changho",
        "9p",
        "This is some info",
        "https://link.to.some.avatar",
        {
          reviews: [],
          articles: [],
          comments: []
        },
        ['','','']
      )
    ).toBeTruthy();
  });

  it("should demand all fields for the form data", () => {});
});
