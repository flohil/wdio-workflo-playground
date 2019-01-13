import { steps } from '?/steps'

suite("Homepage Suite 2", {}, () => {
  testcase("visit homepage 2", {}, () => {
    given(steps["open homepage"]())
    .when(steps["get title"]({
      cb: (title) => {
        validate({"1.2": [2]}, () => {
          expect(title).toEqual("Googasdfle")
        })
      }
    }))
  })
})