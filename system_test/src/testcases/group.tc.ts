import { steps } from '?/steps'

suite("Group", {}, () => {
  testcase("get and set value", {testId: '6'}, () => {
    given(steps["open toolsqa page %{path}"]({
      cb: () => {
        validate({"1.1": [1]}, () => {
          expect(1).toBe(1)
        })
      }
    }))
  })
})