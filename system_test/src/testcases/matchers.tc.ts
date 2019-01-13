import { steps } from '?/steps'
import { pages } from '?/page_objects'

const textStr = "This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously."
const textContainsStr = "This example"
const textNotStr = "asdfasdfasdfasdfasdfasdfasdf"

suite("Matchers", {}, () => {

  // expectElement(pages.google.input).toExist()
  // expectElement(pages.google.nonExistingDiv).not.toExist()
  // expectElement(pages.google.input).toBeVisible()
  // expectElement(pages.google.nonExistingDiv).not.toBeVisible()
  // expectElement(pages.google.input).toHaveClass('gsfi lst-d-f')
  // expectElement(pages.google.input).not.toHaveClass('aasdf')

  // why does this take so long???

  // expectElement(pages.google.input).toEventuallyExist({timeout: 6000})
  // expectElement(pages.google.nonExistingDiv).not.toEventuallyExist({timeout: 6000})
  // expectElement(pages.google.input).toEventuallyBeVisible({timeout: 6000})
  // expectElement(pages.google.nonExistingDiv).not.toEventuallyBeVisible({timeout: 6000})
  // expectElement(pages.google.input).toEventuallyHaveClass('gsfi lst-d-f', {timeout: 6000})
  // expectElement(pages.google.input).not.toEventuallyHaveClass('aasdf', {timeout: 6000})

  // expectElement(pages.google.input).toEventuallyHaveClass('aasdf', {timeout: 2000})

  testcase("existence", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          pages.google.input.wait.exists()

          expectElement(pages.google.input).toExist()
          expectElement(pages.google.input).toEventuallyExist()

          pages.google.nonExistingDiv.wait.not.exists()

          expectElement(pages.google.nonExistingDiv).not.toExist()
          expectElement(pages.google.nonExistingDiv).not.toEventuallyExist()

          expectElement(pages.google.nonExistingDiv).toExist()
          expectElement(pages.google.nonExistingDiv).toEventuallyExist()

          pages.google.nonExistingDiv.wait.exists()
        })
      }
    }))
  })

  testcase("visibility", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          pages.google.input.wait.isVisible()

          expectElement(pages.google.input).toBeVisible()
          expectElement(pages.google.input).toEventuallyBeVisible()

          pages.google.nonExistingDiv.wait.not.isVisible()

          expectElement(pages.google.nonExistingDiv).not.toBeVisible()
          expectElement(pages.google.nonExistingDiv).not.toEventuallyBeVisible()

          expectElement(pages.google.nonExistingDiv).toBeVisible()
          expectElement(pages.google.nonExistingDiv).toEventuallyBeVisible()

          pages.google.nonExistingDiv.wait.isVisible()
        })
      }
    }))
  })

  testcase("enabled", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.demo.dynamicControls.searchInput.wait.not.isEnabled()

          expectElement(pages.demo.dynamicControls.searchInput).not.toBeEnabled()
          expectElement(pages.demo.dynamicControls.searchInput).not.toEventuallyBeEnabled()
        })
      }
    }))
    .when(steps["enable input in demopage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.demo.dynamicControls.searchInput.wait.isEnabled()

          expectElement(pages.demo.dynamicControls.searchInput).toBeEnabled()
          expectElement(pages.demo.dynamicControls.searchInput).toEventuallyBeEnabled()

          // expectElement(pages.demo.dynamicControls.searchInput).not.toBeEnabled()
          // expectElement(pages.demo.dynamicControls.searchInput).not.toEventuallyBeEnabled()

          // pages.demo.dynamicControls.searchInput.wait.not.isEnabled()
        })
      }
    }))
  })

  testcase("selected", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.demo.dynamicControls.searchInput.wait.not.isEnabled()

          expectElement(pages.demo.dynamicControls.searchInput).not.toBeEnabled()
          expectElement(pages.demo.dynamicControls.searchInput).not.toEventuallyBeEnabled()
        })
      }
    }))
    .when(steps["enable input in demopage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.demo.dynamicControls.searchInput.wait.isEnabled()

          expectElement(pages.demo.dynamicControls.searchInput).toBeEnabled()
          expectElement(pages.demo.dynamicControls.searchInput).toEventuallyBeEnabled()

          expectElement(pages.demo.dynamicControls.searchInput).not.toBeEnabled()
          expectElement(pages.demo.dynamicControls.searchInput).not.toEventuallyBeEnabled()

          pages.demo.dynamicControls.searchInput.wait.not.isEnabled()
        })
      }
    }))
  })

  testcase("checked", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'checkboxes'},
      cb: () => {
        validate({"2.1": [1]}, () => {

          const firstCheckbox = pages.demo.checkboxes.checkboxes.first
          const secondCheckbox = pages.demo.checkboxes.checkboxes.at(1)

          firstCheckbox.wait.not.isChecked()
          secondCheckbox.wait.isChecked()

          expectElement(firstCheckbox).not.toBeChecked()
          expectElement(secondCheckbox).toBeChecked()

          expectElement(firstCheckbox).not.toEventuallyBeChecked()
          expectElement(secondCheckbox).toEventuallyBeChecked()
        })
      }
    }))
  })

  testcase("text", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const paragraph = pages.demo.dynamicControls.paragraph
          const input = pages.demo.dynamicControls.searchInput

          paragraph.wait.hasText(textStr)
          paragraph.wait.hasAnyText()
          paragraph.wait.containsText(textContainsStr)

          paragraph.wait.not.hasText(textNotStr)
          paragraph.wait.not.containsText(textNotStr)
          input.wait.not.hasAnyText()

          expectElement(paragraph).toHaveText(textStr)
          expectElement(paragraph).toHaveAnyText()
          expectElement(paragraph).toContainText(textContainsStr)

          expectElement(paragraph).not.toHaveText(textNotStr)
          expectElement(input).not.toHaveAnyText()
          expectElement(paragraph).not.toContainText(textNotStr)

          expectElement(paragraph).toEventuallyHaveText(textStr)
          expectElement(paragraph).toEventuallyHaveAnyText()
          expectElement(paragraph).toEventuallyContainText(textContainsStr)

          expectElement(paragraph).not.toEventuallyHaveText(textNotStr)
          expectElement(input).not.toEventuallyHaveAnyText()
          expectElement(paragraph).not.toEventuallyContainText(textNotStr)
        })
      }
    }))
  })

  testcase("value", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const input = pages.demo.login.usernameByName
          const fullValue = 'Jodel'
          const partialValue = 'Jod'

          input.wait.not.hasValue(fullValue)
          input.wait.not.containsValue(partialValue)
          input.wait.not.hasAnyValue()

          expectElement(input).not.toHaveValue(fullValue)
          expectElement(input).not.toHaveAnyValue()
          expectElement(input).not.toContainValue(partialValue)

          expectElement(input).not.toEventuallyHaveValue(fullValue)
          expectElement(input).not.toEventuallyHaveAnyValue()
          expectElement(input).not.toEventuallyContainValue(partialValue)

          input.setValue(fullValue)

          input.wait.hasValue(fullValue)
          input.wait.containsValue(partialValue)
          input.wait.hasAnyValue()

          expectElement(input).toHaveValue(fullValue)
          expectElement(input).toHaveAnyValue()
          expectElement(input).toContainValue(partialValue)

          expectElement(input).toEventuallyHaveValue(fullValue)
          expectElement(input).toEventuallyHaveAnyValue()
          expectElement(input).toEventuallyContainValue(partialValue)
        })
      }
    }))
  })

  testcase("html", {}, () => {
    console.log("start testcase")
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const footer = pages.demo.dynamicControls.footer
          const input = pages.demo.dynamicControls.searchInput

          const HTML = `
      <div class="large-4 large-centered columns">
        <hr>
        <div style="text-align: center;">Powered by <a target="_blank" href="http://elementalselenium.com/">Elemental Selenium</a></div>
      </div>
    `
          const containsHTML = '<div style="text-align: center;">Powered by <a target="_blank" href="http://elementalselenium.com/">Elemental Selenium</a></div>'
          const notHTML = '<span style="text-align: center;">Powered by <a target="_blank" href="http://elementalselenium.com/">Elemental Selenium</a></span>'

          footer.wait.hasHTML(HTML)
          footer.wait.hasAnyHTML()
          footer.wait.containsHTML(containsHTML)

          // input.wait.hasHTML(HTML)

          footer.wait.not.hasHTML(notHTML)
          input.wait.not.hasAnyHTML()
          footer.wait.not.containsHTML(notHTML)

          expectElement(footer).toHaveHTML(HTML)
          expectElement(footer).toHaveAnyHTML()
          expectElement(footer).toContainHTML(containsHTML)

          expectElement(footer).not.toHaveHTML(notHTML)
          expectElement(input).not.toHaveAnyHTML()
          expectElement(footer).not.toContainHTML(notHTML)

          expectElement(footer).toEventuallyHaveHTML(HTML)
          expectElement(footer).toEventuallyHaveAnyHTML()
          expectElement(footer).toEventuallyContainHTML(containsHTML)

          expectElement(footer).not.toEventuallyHaveHTML(notHTML)
          expectElement(input).not.toEventuallyHaveAnyHTML()
          expectElement(footer).not.toEventuallyContainHTML(notHTML)
        })
      }
    }))
  })

  testcase("direct text", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const poweredBy = pages.demo.dynamicControls.poweredBy
          const input = pages.demo.dynamicControls.searchInput

          const directText = 'Powered by '
          const containsDirectText = 'by'
          const notDirectText = 'asdf'

          poweredBy.wait.hasDirectText(directText)
          poweredBy.wait.hasAnyDirectText()
          poweredBy.wait.containsDirectText(containsDirectText)

          poweredBy.wait.not.hasDirectText(notDirectText)
          input.wait.not.hasAnyDirectText()
          poweredBy.wait.not.containsDirectText(notDirectText)

          expectElement(poweredBy).toHaveDirectText(directText)
          expectElement(poweredBy).toHaveAnyDirectText()
          expectElement(poweredBy).toContainDirectText(containsDirectText)

          expectElement(poweredBy).not.toHaveDirectText(notDirectText)
          expectElement(input).not.toHaveAnyDirectText()
          expectElement(poweredBy).not.toContainDirectText(notDirectText)

          expectElement(poweredBy).toEventuallyHaveDirectText(directText)
          expectElement(poweredBy).toEventuallyHaveAnyDirectText()
          expectElement(poweredBy).toEventuallyContainDirectText(containsDirectText)

          expectElement(poweredBy).not.toEventuallyHaveDirectText(notDirectText)
          expectElement(input).not.toEventuallyHaveAnyDirectText()
          expectElement(poweredBy).not.toEventuallyContainDirectText(notDirectText)
        })
      }
    }))
  })

  testcase("attribute", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const button = pages.demo.dynamicControls.enableButton
          const footer = pages.demo.dynamicControls.footer

          const type = 'button'
          const containsType = 'tto'
          const notType = 'asdf'

          button.wait.hasAttribute({name: 'type', value: type})
          button.wait.hasAnyAttribute('type')
          button.wait.containsAttribute({name: 'type', value: type})

          button.wait.not.hasAttribute({name: 'type', value: type})
          footer.wait.not.hasAnyAttribute('type')
          button.wait.not.containsAttribute({name: 'type', value: type})

          expectElement(button).toHaveAttribute({name: 'type', value: type})
          expectElement(button).toHaveAnyAttribute('type')
          expectElement(button).toContainAttribute({name: 'type', value: containsType})

          expectElement(button).not.toHaveAttribute({name: 'type', value: notType})
          expectElement(footer).not.toHaveAnyAttribute('type')
          expectElement(button).not.toContainAttribute({name: 'type', value: notType})

          expectElement(button).toEventuallyHaveAttribute({name: 'type', value: type})
          expectElement(button).toEventuallyHaveAnyAttribute('type')
          expectElement(button).toEventuallyContainAttribute({name: 'type', value: containsType})

          expectElement(button).not.toEventuallyHaveAttribute({name: 'type', value: notType})
          expectElement(footer).not.toEventuallyHaveAnyAttribute('type')
          expectElement(button).not.toEventuallyContainAttribute({name: 'type', value: notType})
        })
      }
    }))
  })

  testcase("class", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const footer = pages.demo.dynamicControls.footer
          const input = pages.demo.dynamicControls.searchInput

          const klass = 'row'
          const containsClass = 'ro'
          const notClass = 'asdf'

          footer.wait.hasClass(klass)
          footer.wait.hasAnyClass()
          footer.wait.containsClass(containsClass)

          footer.wait.not.hasClass(notClass)
          footer.wait.not.containsClass(notClass)
          input.wait.not.hasAnyClass()

          expectElement(footer).toHaveClass(klass)
          expectElement(footer).toHaveAnyClass()
          expectElement(footer).toContainClass(containsClass)

          expectElement(footer).not.toHaveClass(notClass)
          expectElement(input).not.toHaveAnyClass()
          expectElement(footer).not.toContainClass(notClass)

          expectElement(footer).toEventuallyHaveClass(klass)
          expectElement(footer).toEventuallyHaveAnyClass()
          expectElement(footer).toEventuallyContainClass(containsClass)

          expectElement(footer).not.toEventuallyHaveClass(notClass)
          expectElement(input).not.toEventuallyHaveAnyClass()
          expectElement(footer).not.toEventuallyContainClass(notClass)
        })
      }
    }))
  })

  testcase("id", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const input = pages.demo.login.usernameByName
          const fullId = 'username'
          const partialId = 'user'
          const notId = 'asdf'

          input.wait.not.hasId(notId)
          input.wait.not.containsId(notId)

          expectElement(input).not.toHaveId(notId)
          expectElement(input).not.toContainId(notId)

          expectElement(input).not.toEventuallyHaveId(notId)
          expectElement(input).not.toEventuallyContainId(notId)

          input.wait.hasId(fullId)
          input.wait.containsId(partialId)
          input.wait.hasAnyId()

          expectElement(input).toHaveId(fullId)
          expectElement(input).toHaveAnyId()
          expectElement(input).toContainId(partialId)

          expectElement(input).toEventuallyHaveId(fullId)
          expectElement(input).toEventuallyHaveAnyId()
          expectElement(input).toEventuallyContainId(partialId)
        })
      }
    }))
    .when(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const input = pages.demo.dynamicControls.searchInput

          input.wait.not.hasAnyId()
          expectElement(input).not.toHaveAnyId()
          expectElement(input).not.toEventuallyHaveAnyId()
        })
      }
    }))
  })

  testcase("name", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const input = pages.demo.login.usernameById
          const fullName = 'username'
          const partialName = 'user'
          const notName = 'asdf'

          input.wait.not.hasName(notName)
          input.wait.not.containsName(notName)

          expectElement(input).not.toHaveName(notName)
          expectElement(input).not.toContainName(notName)

          expectElement(input).not.toEventuallyHaveName(notName)
          expectElement(input).not.toEventuallyContainName(notName)

          input.wait.hasName(fullName)
          input.wait.containsName(partialName)
          input.wait.hasAnyName()

          expectElement(input).toHaveName(fullName)
          expectElement(input).toHaveAnyName()
          expectElement(input).toContainName(partialName)

          expectElement(input).toEventuallyHaveName(fullName)
          expectElement(input).toEventuallyHaveAnyName()
          expectElement(input).toEventuallyContainName(partialName)
        })
      }
    }))
    .when(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const input = pages.demo.dynamicControls.searchInput

          input.wait.not.hasAnyName()
          expectElement(input).not.toHaveAnyName()
          expectElement(input).not.toEventuallyHaveAnyName()
        })
      }
    }))
  })

  testcase("location", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          expectElement(pages.google.input).not.toHaveLocation({x: 10, y: 10}, {x: 2, y: 2})
          expectElement(pages.google.input).not.toHaveLocation({x: 10, y: 10}, {y: 2})
          expectElement(pages.google.input).not.toHaveLocation({x: 10, y: 10})

          expectElement(pages.google.input).not.toHaveX(10, 2)
          expectElement(pages.google.input).not.toHaveX(10)

          expectElement(pages.google.input).not.toHaveY(10, 2)
          expectElement(pages.google.input).not.toHaveY(10)

          expectElement(pages.google.input).toHaveLocation({x: 400, y: 325}, {x: 20, y: 20})
          expectElement(pages.google.input).toHaveLocation({x: 404.5, y: 325}, {y: 20})
          expectElement(pages.google.input).toHaveLocation({x: 404.5, y: 323})

          expectElement(pages.google.input).toHaveX(400, 20)
          expectElement(pages.google.input).toHaveX(404.5)

          expectElement(pages.google.input).toHaveY(325, 20)
          expectElement(pages.google.input).toHaveY(323)

          // expectElement(pages.google.input).toHaveLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}})
          // expectElement(pages.google.input).toHaveLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          // expectElement(pages.google.input).toHaveLocation({x: 10, y: 10})

          // expectElement(pages.google.input).toHaveX(10, {tolerance: 2})
          // expectElement(pages.google.input).toHaveX(10)

          // expectElement(pages.google.input).toHaveY(10, {tolerance: 2})
          // expectElement(pages.google.input).toHaveY(10)

          pages.google.input.wait.not.hasLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}})
          pages.google.input.wait.not.hasLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          pages.google.input.wait.not.hasLocation({x: 10, y: 10})

          pages.google.input.wait.not.hasX(10, {tolerance: 2})
          pages.google.input.wait.not.hasX(10)

          pages.google.input.wait.not.hasY(10, {tolerance: 2})
          pages.google.input.wait.not.hasY(10)

          pages.google.input.wait.hasLocation({x: 400, y: 325}, {tolerances: {x: 20, y: 20}})
          pages.google.input.wait.hasLocation({x: 404.5, y: 325}, {tolerances: {y: 20}})
          pages.google.input.wait.hasLocation({x: 404.5, y: 323})

          pages.google.input.wait.hasX(400, {tolerance: 20})
          pages.google.input.wait.hasX(404.5)

          pages.google.input.wait.hasY(325, {tolerance: 20})
          pages.google.input.wait.hasY(323)

          // pages.google.input.wait.hasLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}})
          // pages.google.input.wait.hasLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          // pages.google.input.wait.hasLocation({x: 10, y: 10})

          // pages.google.input.wait.hasX(10, {tolerance: 2})
          // pages.google.input.wait.hasX(10)

          // pages.google.input.wait.hasY(10, {tolerance: 2})
          // pages.google.input.wait.hasY(10)

          expectElement(pages.google.input).not.toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}, timeout: 2000})
          expectElement(pages.google.input).not.toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          expectElement(pages.google.input).not.toEventuallyHaveLocation({x: 10, y: 10})

          expectElement(pages.google.input).not.toEventuallyHaveX(10, {tolerance: 2})
          expectElement(pages.google.input).not.toEventuallyHaveX(10)

          expectElement(pages.google.input).not.toEventuallyHaveY(10, {tolerance: 2})
          expectElement(pages.google.input).not.toEventuallyHaveY(10)

          expectElement(pages.google.input).toEventuallyHaveLocation({x: 400, y: 325}, {tolerances: {x: 20, y: 20}})
          expectElement(pages.google.input).toEventuallyHaveLocation({x: 404.5, y: 325}, {tolerances: {y: 20}})
          expectElement(pages.google.input).toEventuallyHaveLocation({x: 404.5, y: 323})

          expectElement(pages.google.input).toEventuallyHaveX(400, {tolerance: 20})
          expectElement(pages.google.input).toEventuallyHaveX(404.5)

          expectElement(pages.google.input).toEventuallyHaveY(325, {tolerance: 20})
          expectElement(pages.google.input).toEventuallyHaveY(323)

          // expectElement(pages.google.input).toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}, timeout: 2000})
          // expectElement(pages.google.input).toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {x: 1}})
          // expectElement(pages.google.input).toEventuallyHaveLocation({x: 10, y: 10})

          // expectElement(pages.google.input).toEventuallyHaveX(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveX(10)

          // expectElement(pages.google.input).toEventuallyHaveY(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveY(10)
        })
      }
    }))
  })

  testcase("size", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          expectElement(pages.google.input).not.toHaveSize({width: 10, height: 10}, {width: 2, height: 2})
          expectElement(pages.google.input).not.toHaveSize({width: 10, height: 10}, {height: 2})
          expectElement(pages.google.input).not.toHaveSize({width: 10, height: 10})

          expectElement(pages.google.input).not.toHaveWidth(10, 2)
          expectElement(pages.google.input).not.toHaveWidth(10)

          expectElement(pages.google.input).not.toHaveHeight(10, 2)
          expectElement(pages.google.input).not.toHaveHeight(10)

          expectElement(pages.google.input).toHaveSize({width: 400, height: 40}, {width: 20, height: 20})
          expectElement(pages.google.input).toHaveSize({width: 403, height: 40}, {height: 20})
          expectElement(pages.google.input).toHaveSize({width: 403, height: 34})

          expectElement(pages.google.input).toHaveWidth(400, 20)
          expectElement(pages.google.input).toHaveWidth(403)

          expectElement(pages.google.input).toHaveHeight(40, 20)
          expectElement(pages.google.input).toHaveHeight(34)

          // expectElement(pages.google.input).toHaveSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}})
          // expectElement(pages.google.input).toHaveSize({width: 10, height: 10}, {tolerances: {height: 2}})
          // expectElement(pages.google.input).toHaveSize({width: 10, height: 10})

          // expectElement(pages.google.input).toHaveWidth(10, {tolerance: 2})
          // expectElement(pages.google.input).toHaveWidth(10)

          // expectElement(pages.google.input).toHaveHeight(10, {tolerance: 2})
          // expectElement(pages.google.input).toHaveHeight(10)

          pages.google.input.wait.not.hasSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}})
          pages.google.input.wait.not.hasSize({width: 10, height: 10}, {tolerances: {height: 2}})
          pages.google.input.wait.not.hasSize({width: 10, height: 10})

          pages.google.input.wait.not.hasWidth(10, {tolerance: 2})
          pages.google.input.wait.not.hasWidth(10)

          pages.google.input.wait.not.hasHeight(10, {tolerance: 2})
          pages.google.input.wait.not.hasHeight(10)

          pages.google.input.wait.hasSize({width: 400, height: 40}, {tolerances: {width: 20, height: 20}})
          pages.google.input.wait.hasSize({width: 403, height: 40}, {tolerances: {height: 20}})
          pages.google.input.wait.hasSize({width: 403, height: 34})

          pages.google.input.wait.hasWidth(400, {tolerance: 20})
          pages.google.input.wait.hasWidth(403)

          pages.google.input.wait.hasHeight(40, {tolerance: 20})
          pages.google.input.wait.hasHeight(34)

          // pages.google.input.wait.hasSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}})
          // pages.google.input.wait.hasSize({width: 10, height: 10}, {tolerances: {height: 2}})
          // pages.google.input.wait.hasSize({width: 10, height: 10})

          // pages.google.input.wait.hasWidth(10, {tolerance: 2})
          // pages.google.input.wait.hasWidth(10)

          // pages.google.input.wait.hasHeight(10, {tolerance: 2})
          // pages.google.input.wait.hasHeight(10)

          expectElement(pages.google.input).not.toEventuallyHaveSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}, timeout: 2000})
          expectElement(pages.google.input).not.toEventuallyHaveSize({width: 10, height: 10}, {tolerances: {height: 2}})
          expectElement(pages.google.input).not.toEventuallyHaveSize({width: 10, height: 10})

          expectElement(pages.google.input).not.toEventuallyHaveWidth(10, {tolerance: 2})
          expectElement(pages.google.input).not.toEventuallyHaveWidth(10)

          expectElement(pages.google.input).not.toEventuallyHaveHeight(10, {tolerance: 2})
          expectElement(pages.google.input).not.toEventuallyHaveHeight(10)

          expectElement(pages.google.input).toEventuallyHaveSize({width: 400, height: 40}, {tolerances: {width: 20, height: 20}})
          expectElement(pages.google.input).toEventuallyHaveSize({width: 403, height: 40}, {tolerances: {height: 20}})
          expectElement(pages.google.input).toEventuallyHaveSize({width: 403, height: 34})

          expectElement(pages.google.input).toEventuallyHaveWidth(400, {tolerance: 20})
          expectElement(pages.google.input).toEventuallyHaveWidth(403)

          expectElement(pages.google.input).toEventuallyHaveHeight(40, {tolerance: 20})
          expectElement(pages.google.input).toEventuallyHaveHeight(34)

          // expectElement(pages.google.input).toEventuallyHaveSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}, timeout: 2000})
          // expectElement(pages.google.input).toEventuallyHaveSize({width: 10, height: 10}, {tolerances: {width: 1}})
          // expectElement(pages.google.input).toEventuallyHaveSize({width: 10, height: 10})

          // expectElement(pages.google.input).toEventuallyHaveWidth(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveWidth(10)

          // expectElement(pages.google.input).toEventuallyHaveHeight(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveHeight(10)
        })
      }
    }))
  })
})