Feature("Story", {}, () => {
  Story("4.4", "Another story", {}, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "the correct page title should be displayed")
      })
    })
  })
  Story("5.5", "Manual story", {}, () => {
    Given("a user opens the google homepage", () => {
      When("the user manually does something successfully", () => {
        Then(1, "the manual test case succeeds")
      })
      When("the user manually does something unsuccessfully", () => {
        Then(2, "the manual test case fails")
      })
    })
  })
})