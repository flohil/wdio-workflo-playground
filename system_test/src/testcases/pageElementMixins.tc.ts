import { steps } from '?/steps'
import { pages } from '?/page_objects'

suite("Mixin", {}, () => {
  testcase("test page element mixins", {}, () => {
    given(steps["open demopage %{path}"]({
      args: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expect(pages.demo.dynamicControls.searchInput.testProp).toEqual('testProp in ValuePageElement')
          expect(pages.demo.dynamicControls.searchInput.testValueProp).toEqual('testValueProp in ValuePageElement')
          expect(pages.demo.dynamicControls.paragraph.testProp).toEqual('testProp in PageElement')

          expect(pages.demo.dynamicControls.searchInput.printValueTestValue()).toEqual(
            'testValue in ValuePageElementvalueTestValue in Input'
          )
          expect(pages.demo.dynamicControls.searchInput.printTestValue()).toEqual(
            'testValue in PageElementtestValue in Input'
          )
          expect(pages.demo.dynamicControls.checkbox.printValueTestValue()).toEqual('testValue in ValuePageElement')
          expect(pages.demo.dynamicControls.checkbox.printTestValue()).toEqual('testValue in PageElement')
          expect(pages.demo.dynamicControls.paragraph.printTestValue()).toEqual('testValue in PageElement')

          expectElement(pages.demo.dynamicControls.removeButton).toHaveAnyText()
          expectElement(pages.demo.dynamicControls.searchInput).not.toHaveAnyText()

          expect(pages.demo.dynamicControls.searchInput.currently.hasAnyText()).toBe(false)
        })
      }
    }))
  })
})