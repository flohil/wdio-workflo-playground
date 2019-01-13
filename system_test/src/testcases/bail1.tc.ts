import { pages } from '?/page_objects'

suite("Bail1", {}, () => {
  testcase("test", {testId: '5'}, () => {
    validate({"1.1": [1]}, () => {
      pages.google.nonExistingDiv.click()
      expect(1).toBe(2)
    })
  })
  testcase("test2", {}, () => {
    validate({"1.2": [1]}, () => {
      // browser.element('//div[@id="asdf"]').click()
      expect(1).toBe(2)
    })
  })
  testcase("test3", {}, () => {
    validate({"4.4": [1]}, () => {
      expect(1).toBe(1)
    })
  })
})