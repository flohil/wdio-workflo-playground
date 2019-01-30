import { steps } from '?/steps'
import { pages } from '?/page_objects'

suite("Page Suite", {}, () => {
  testcase("page isOpen", {}, () => {
    given(steps["open demopage %{path}"]({
      args: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expect(pages.demo.dynamicControlsOpen.eventually.isOpen()).toBe(false)
          expect(pages.demo.dynamicControlsOpen.isOpen()).toBe(false)

          // pages.demo.dynamicControlsOpen.wait.isOpen()

          pages.demo.dynamicControlsOpen.enableButton.click()

          expect(pages.demo.dynamicControlsOpen.eventually.isOpen({timeout: 10000})).toBe(true)
          expect(pages.demo.dynamicControlsOpen.isOpen()).toBe(true)

          pages.demo.dynamicControlsOpen.disableButton.click()

          expect(pages.demo.dynamicControlsOpen.eventually.isClosed({timeout: 10000})).toBe(true)
          expect(pages.demo.dynamicControlsOpen.isClosed()).toBe(true)

          pages.demo.dynamicControlsOpen.enableButton.click()

          pages.demo.dynamicControlsOpen.wait.isOpen({timeout: 10000})

          pages.demo.dynamicControlsOpen.disableButton.click()

          pages.demo.dynamicControlsOpen.wait.isClosed({timeout: 10000})
        })
      }
    }))
  })
})
