import { steps } from '?/steps'
import { pages } from '../page_objects';

suite("Chaining Suite", {}, () => {
  suite("sub suite", {}, () => {
    suite("sub sub suite", {}, () => {
      testcase("test subs", {}, () => {
        given(steps["open homepage"]())
        .when(steps["test chaining functionality"]({
          cb: () => {
            validate({'7.7': [1]}, () => {
              expect(true).toBe(true)
            })
          }
        }))
      })
    })
  })
  testcase("test chaining", {}, () => {
    given(steps["open homepage"]())
    .when(steps["test chaining functionality"]({
      cb: () => {
        validate({'7.7': [1]}, () => {
          expect(true).toBe(true)
        })
      }
    }))
  })
  testcase("invalid group chaining", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({'7.7': [1]}, () => {
          expect(() => pages.google.container.$.ElementGroup({})).toThrowError(
            'Selector chaining is not supported for PageElementGroups.'
          )
        })
      }
    }))
  })
})