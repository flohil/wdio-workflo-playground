Feature("Homepage", {}, () => {
  Story("1.1", "Display correct title", {issues: ['KBCPP-1', 'KBCPP-2'], bugs: ['KBCPP-3', 'KBCPP-4']}, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "the correct page title should be displayed")
      })
    })
  })
  Story("1.2", "Failing story", {}, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "This spec fails")
        Then(2, "This spec fails bla")
      })
    })
  })
  Story("2.2", "last failing story", {bugs: ["KBCPP-3"], issues: ["KBCPP-2222"]}, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "This spec fails too")
      })
    })
  })
  Story("2.1", "another story", {}, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "This spec is ok")
        Then(2, "This spec is also ok")
      })
    })
  })
})