import { steps } from '?/steps'
import { pages, stores, elements } from '?/page_objects'

suite("Page Matchers", {}, () => {
  testcase("toBeOpen", {}, () => {
    given(steps["open demopage %{path}"]({
      args: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectPage(pages.demo.dynamicControls).toBeOpen()
          expectPage(pages.google).not.toBeOpen()

          // expectPage(pages.demo.dynamicControls).not.toBeOpen()
          // expectPage(pages.google).toBeOpen()
        })
      }
    }))
  })

  testcase("toBeClosed", {}, () => {
    given(steps["open demopage %{path}"]({
      args: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectPage(pages.google).toBeClosed()
          expectPage(pages.demo.dynamicControls).not.toBeClosed()

          // expectPage(pages.google).not.toBeClosed()
          // expectPage(pages.demo.dynamicControls).toBeClosed()
        })
      }
    }))
  })

  testcase("toEventuallyBeOpen", {}, () => {
    given(steps["open demopage %{path}"]({
      args: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectPage(pages.demo.dynamicControls).toEventuallyBeOpen()
          expectPage(pages.google).not.toEventuallyBeOpen()

          // expectPage(pages.demo.dynamicControls).not.toEventuallyBeOpen()
          // expectPage(pages.google).toEventuallyBeOpen()
        })
      }
    }))
  })

  testcase("toEventuallyBeClosed", {}, () => {
    given(steps["open demopage %{path}"]({
      args: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectPage(pages.google).toEventuallyBeClosed()
          expectPage(pages.demo.dynamicControls).not.toEventuallyBeClosed()

          // expectPage(pages.google).not.toEventuallyBeClosed()
          // expectPage(pages.demo.dynamicControls).toEventuallyBeClosed()
        })
      }
    }))
  })
})