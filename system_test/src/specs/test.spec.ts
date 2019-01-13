Feature("Test", {featureProp: 1}, () => {
  Story("7.7", "Display correct title", {severity: 'critical', }, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "the correct page title should be displayed")
      })
    })
  })
})