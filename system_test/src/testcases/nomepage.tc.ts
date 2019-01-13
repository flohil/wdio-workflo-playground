import { steps } from '?/steps'
import { pages, stores } from '?/page_objects'

suite("Matchers", {}, () => {
  testcase("test", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          expect(1).toBe(2)
          expectElement(pages.google.nonExistingDiv).toExist()
          expectElement(pages.google.nonExistingDiv).toBeVisible()
          expectElement(pages.google.container).not.toBeVisible()
          expectElement(pages.google.container).toBeEnabled()
          expectElement(pages.google.container).not.toBeEnabled()
          expectElement(pages.google.container).toBeSelected()
          expectElement(pages.google.container).toHaveText('jolo')
          expectElement(pages.google.container).toContainText('jolo')
          expectElement(pages.google.container).toHaveText("gurgel")
          expectElement(pages.google.container).toContainText("gurg")

          expect(2).not.toBe(2)

          expectElement(pages.google.container).not.toExist()
          expectElement(pages.google.container).not.toBeVisible()
          expectElement(pages.google.nonExistingDiv).toBeVisible()
          expectElement(pages.google.container).not.toBeEnabled()
          expectElement(pages.google.container).toBeEnabled()
          expectElement(pages.google.container).not.toBeSelected()
          expectElement(pages.google.container).not.toHaveText("")
          expectElement(pages.google.container).not.toContainText("oogle")
          expectElement(pages.google.container).not.toHaveText("gurgel")
          expectElement(pages.google.container).not.toContainText("gurg")

          pages.google.input.wait.isVisible()

          expectElement(pages.google.input).toHaveValue('jolo')
          expectElement(pages.google.input).toContainValue('jolo')
          expectElement(pages.google.input).toHaveValue("gurgel")
          expectElement(pages.google.input).toContainValue("gurg")

          expectElement(pages.google.input).not.toHaveValue("")
          expectElement(pages.google.input).not.toContainValue("")
          expectElement(pages.google.input).not.toHaveValue("gurgel")
          expectElement(pages.google.input).not.toContainValue("gurg")
        })
      }
    }))
  })
})

suite("TSuite", {}, () => {
  testcase("arrows", {}, () => {
    given(steps["open url %{url}"]({
      arg: {url: '/'}
    }))
    .when(steps["successful step"]({
      cb: () => {
        validate({"2.1": [2]}, () => {
          expect(1).toBe(2)
        })

        validate({"2.2": [1]}, () => {
          expect(3).toBe(3)
        })
      }
    }))
    .and(steps["successful step"]({
      cb: () => {
        validate({"2.2": [1]}, () => {
          expect(4).toBe(4)
        })
      }
    }))
  })
  testcase("multiple", {}, () => {
    given(steps["open url %{url}"]({
      arg: {url: '/'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          expect(1).toBe(2)
        })
      }
    }))
    .when(steps["successful step"]({
      cb: () => {
        validate({"2.1": [2]}, () => {
          expect(1).toBe(2)
        })

        validate({"2.1": [1]}, () => {
          expect(3).toBe(2)
          expect(4).toBe(2)

          browser.element('//asdf').getText()
        })

        validate({"2.2": [1]}, () => {
          expect(1).toBe(2)
        })
      }
    }))
  })
  testcase("not implemented", {}, () => {
    given(steps["open url %{url} asdf"]({
      arg: {url: '/'},
      cb: () => {
        validate({"1.1": [1]}, () => {
          expect(1).toBe(2)
        })
      }
    }))
  })
  testcase("passing", {}, () => {
    given(steps["open url %{url}"]({
      arg: {url: '/'},
      cb: () => {
        validate({"2.2": [1]}, () => {
          expect(1).toBe(1)
        })
      }
    }))
  })
  testcase("broken", {}, () => {
    given(steps["open url %{url}"]({
      arg: {url: '/'},
      cb: () => {
        browser.getText('//div[@id="asdf"]')

        validate({"1.1": [1]}, () => {
          expect(1).toBe(2)
        })
      }
    }))
  })
  testcase("failed", {}, () => {
    given(steps["open url %{url}"]({
      arg: {url: '/'},
      cb: () => {
        validate({"1.2": [1, 2]}, () => {
          expect(1).toBe(2)
        })
      }
    }))
  })
  testcase("broken in validate", {}, () => {
    given(steps["open url %{url}"]({
      arg: {url: '/'},
      cb: () => {
        validate({"1.2": [2]}, () => {
          browser.getText('//div[@id="asdf"]')
          expect(1).toBe(2)
        })
      }
    }))
  })
  testcase("typeerror", {}, () => {
    given(steps["open url %{url}"]({
      arg: {url: '/'},
      cb: () => {
        this.something.getInfo()

        validate({"1.2": [2]}, () => {
          expect(1).toBe(1)
        })
      }
    }))
  })
  testcase("typeerror broken", {}, () => {
    given(steps["open url %{url}"]({
      arg: {url: '/'},
      cb: () => {

        validate({"1.2": [2]}, () => {
          this.something.getInfo()

          expect(1).toBe(1)
        })
      }
    }))
  })
  testcase("waituntil", {}, () => {
    given(steps["open url %{url}"]({
      arg: {url: '/'},
      cb: () => {
        browser.waitUntil(() => {
          return browser.getText('//body') === "jodel"
        })

        validate({"1.2": [2]}, () => {
          expect(1).toBe(1)
        })
      }
    }))
  })
  testcase("middle fail", {}, () => {
    given(steps["successful step"]())
    .when(steps["successful step"]())
    .and(steps["successful step"]())
    .and(steps["successful step"]())
    .and(steps["successful step"]())
    .and(steps["successful step"]())
    .and(steps["successful step"]())
    .and(steps["successful step"]())
    .and(steps["successful step"]())
    .and(steps["successful step"]())
    .and(steps["broken step"]())
    .and(steps["successful step"]())
  })
})

suite("Supertest Suite", {}, () => {
  testcase("middle fail", {}, () => {
    given(steps["successful step"]())
    .when(steps["successful step"]())
    .and(steps["failing step"]())
    .and(steps["successful step"]())
  })
  testcase("test", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        // browser.getText('//div[@id="asasdf"]')

        validate({"1.2": [1]}, () => {
          expect(3).toBe(2)
        })
      }
    }))
  })
  testcase("test 2", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        // browser.getText('//div[@id="asasdf"]')

        validate({"1.2": [2]}, () => {
          expect(browser.getText('//div[@id="asasdf"]')).toBe("asdf")
        })
      }
    }))
  })
})

suite("Homepage Suite", {}, () => {
  testcase("visit homepage", {bugs: ['KBCPP-5'], severity: "blocker"}, () => {
    given(steps["open homepage"]())
    .when(steps["get title"]({
      cb: (title) => {
        validate({"1.2": [1]}, () => {
          expect(3).toBe(2)
          expect(4).toBe(2)
        })
      }
    }))
    .and(steps["success"]())
    .and(steps["failure"]({
      cb: () => {
        validate({"2.2": [1]}, () => {
          expect("asdf").toBe("aaaa")
        })
      }
    }))
  })
  testcase("google something", {bugs: ['KBCPP-55']}, () => {
    given(steps["open homepage"]())
    .when(steps["google %{term}"]({
      arg: {term: "Webdriverio"},
      cb: () => {
        browser.debug()
      }
    }))
  })
  testcase("wait", {bugs: ['KBCPP-66']}, () => {
    given(steps["open homepage"]())
    .when(steps["google %{term}"]({
      arg: {term: "Webdriverio"},
      cb: () => {
        pages.google.container.wait.not.isVisible()

        validate({"2.2": [1]}, () => {
          expect(true).toBe(true)
        })
      }
    }))
  })
  testcase("visit homepage other", {bugs: ['KBCPP-5'], severity: "blocker"}, () => {
    given(steps["open homepage"]())
    .when(steps["get title"]({
      cb: (title) => {
        validate({"1.1": [1]}, () => {
          expect(title).toEqual("Google")
        })
      }
    }))
  })
})

suite("Hidden Click Suite", {}, () => {
  testcase("click unclickable element", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        console.log(getUid('test'))

        const elem = stores.demo.ExistElement(xpath('//input').id('Name'))
        const link = stores.demo.ExistElement(xpath('//a').text('Startseite'))
        browser.scroll(elem.getSelector())

        elem.click()
      }
    }))
  })
})

suite("Failed Suite", {}, () => {
  testcase("visit homepage", {bugs: ['KBCPP-5'], severity: "blocker"}, () => {
    given(steps["open homepage"]())
    .when(steps["failure"]({
      cb: () => {
        validate({"2.2": [1]}, () => {
          expect("asdf").toBe("aaaa")
        })
      }
    }))
  })
  testcase("wait", {bugs: ['KBCPP-66']}, () => {
    given(steps["open homepage"]())
    .when(steps["google %{term}"]({
      arg: {term: "Webdriverio"},
      cb: () => {
        pages.google.container.wait.not.isVisible()
        validate({"1.2": [1]}, () => {
          expect("asdf").toBe("aaaa")
        })
      }
    }))
  })
  testcase("visit homepage 2", {bugs: ['KBCPP-5'], severity: "blocker"}, () => {
    given(steps["open homepage"]())
    .when(steps["failure"]({
      cb: () => {
        validate({"2.2": [1]}, () => {
          expect("asdf").toBe("aaaa")
        })
      }
    }))
  })
  testcase("wait 2", {bugs: ['KBCPP-66']}, () => {
    given(steps["open homepage"]())
    .when(steps["google %{term}"]({
      arg: {term: "Webdriverio"},
      cb: () => {
        pages.google.container.wait.not.isVisible()
        validate({"1.2": [1]}, () => {
          expect("asdf").toBe("aaaa")
        })
      }
    }))
  })
})