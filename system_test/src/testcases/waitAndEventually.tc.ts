import { steps } from '?/steps'
import { pages } from '?/page_objects'

suite("Wait and Eventually", {}, () => {
  testcase("page element wait and eventually", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.google.input.wait.exists()

          expect(1).toBe(1)

          pages.google.nonExistingDiv.wait.not.exists()

          expect(2).toBe(2)

          expect(
            pages.google.input.eventually.exists()
          ).toBe(true)

          expect(
            pages.google.nonExistingDiv.eventually.not.exists()
          ).toBe(true)
        })
      }
    }))
  })

  testcase("page element list wait and eventually test", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          pages.google.divList.wait.none.exists()
          pages.google.divList.wait.any.exists()
          pages.google.divList.wait.hasLength(1, {comparator: Workflo.Comparator.gt})

          expect(1).toBe(1)

          pages.google.nonExistingDivList.wait.none.exists()
          pages.google.nonExistingDivList.wait.isEmpty()

          expect(2).toBe(2)

          expect(
            pages.google.divList.eventually.any.exists()
          ).toBe(true)

          expect(
            pages.google.nonExistingDivList.eventually.none.exists()
          ).toBe(true)

          expect(
            pages.google.nonExistingDivList.eventually.isEmpty()
          ).toBe(true)

          expect(
            pages.google.divList.eventually.hasLength(1, {comparator: Workflo.Comparator.gt})
          ).toBe(true)

          expect(pages.google.divList.currently.any.hasId('quacksi')).toBe(true)

          expect(pages.google.divList.currently.none.hasId('viewport')).toBe(true)
        })
      }
    }))
  })

  testcase("wait untilElement and eventually meetsCondition test", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.google.input.wait.untilElement(
            "has autocomplete off",
            (element) => element.getAttribute("autocomplete") === 'off'
          )

          expect(
            pages.google.input.eventually.meetsCondition(
              (element) => element.getAttribute("autocomplete") === 'off'
            )
          ).toBe(true)
        })
      }
    }))
  })

  testcase("wait for non existing element", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.google.nonExistingDiv.wait.isChecked()

          expect(false).toBe(false)
        })
      }
    }))
  })
})