suite("Bail3", {}, () => {
  testcase("test", {}, () => {
    validate({"1.2": [1]}, () => {
      expect(1).toBe(4)
    })
  })
})