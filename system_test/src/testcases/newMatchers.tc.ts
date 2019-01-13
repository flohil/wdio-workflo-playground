import { steps } from '?/steps'
import { pages, stores, elements } from '?/page_objects'

suite("New Matchers", {}, () => {
  // testcase("check after click", {}, () => {
  //   given(steps["open demopage %{path}"]({
  //     arg: {path: 'dynamic_controls'},
  //     cb: () => {
  //       validate({"1.2": [1]}, () => {

  //         // message element becomes visible 3 seconds after click

  //         // fails because not has any text after timeout
  //         // pages.demo.dynamicControls.removeButton.click()
  //         // pages.demo.dynamicControls.message.wait.hasAnyText()

  //         // fails because element could not be located
  //         // pages.demo.dynamicControls.message.wait.hasAnyText()

  //         // pages.demo.dynamicControls.message.wait.hasAnyClass()
  //         // pages.demo.dynamicControls.checkbox.wait.isChecked()

  //         expect(true).toBe(true)
  //       })
  //     }
  //   }))
  // })

  // testcase("isEmpty", {}, () => {
  //   given(steps["open homepage"]({
  //     cb: () => {
  //       validate({"1.2": [1]}, () => {

  //         console.log(pages.google.divList.currently.isEmpty(), pages.google.divList.currently.not.isEmpty())
  //         console.log(pages.google.divList.eventually.isEmpty(), pages.google.divList.eventually.not.isEmpty())

  //         pages.google.divList.wait.not.isEmpty()
  //         pages.google.divList.wait.isEmpty()



  //         // console.log(pages.google.divList.currently.not.isVisible())

  //         expect(true).toBe(true)

  //         // expectList(pages.google.divList).toBeVisible() pending???
  //       })
  //     }
  //   }))
  // })

  // testcase("getLength and isEmpty", {}, () => {
  //   given(steps["open demopage %{path}"]({
  //     arg: {path: 'dynamic_controls'},
  //     cb: () => {
  //       validate({"1.2": [1]}, () => {

  //         console.log(pages.demo.dynamicControls.nonExistingButtonList.getLength())
  //         console.log(pages.demo.dynamicControls.nonExistingButtonList.currently.isEmpty(),
  //           pages.demo.dynamicControls.nonExistingButtonList.currently.not.isEmpty())

  //         // both return true because list is empty
  //         console.log(pages.demo.dynamicControls.nonExistingButtonList.currently.isVisible())
  //         console.log(pages.demo.dynamicControls.nonExistingButtonList.currently.not.isVisible())

  //         // expect(true).toBe(true)

  //         // check with non existing elements
  //         // expectList(pages.demo.dynamicControls.nonExistingButtonList).toBeVisible()

  //         expectList(pages.demo.dynamicControls.buttonList).toBeVisible()
  //       })
  //     }
  //   }))
  // })

  testcase("toExist", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toExist()
          expectList(pages.demo.dynamicControls.buttonList).not.toExist()
          expectMap(pages.demo.dynamicControls.buttonMap).not.toExist()
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toExist()
          expectGroup(pages.demo.dynamicControls.superGroup).not.toExist()

          expectList(pages.demo.dynamicControls.buttonList).toExist()
          expectList(pages.demo.dynamicControls.buttonList).toExist(true)
          expectList(pages.demo.dynamicControls.buttonList).toExist(false)

          expectList(pages.demo.dynamicControls.buttonList).not.toExist()
          expectList(pages.demo.dynamicControls.buttonList).not.toExist(true)
          expectList(pages.demo.dynamicControls.buttonList).not.toExist(false)

          pages.demo.dynamicControls.buttonList.wait.exists()
          pages.demo.dynamicControls.buttonList.wait.exists({filterMask: true})
          pages.demo.dynamicControls.buttonList.wait.exists({filterMask: false})

          pages.demo.dynamicControls.buttonList.wait.not.exists()
          pages.demo.dynamicControls.buttonList.wait.not.exists({filterMask: true})
          pages.demo.dynamicControls.buttonList.wait.not.exists({filterMask: false})

          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toExist({
            enableButton: true,
            removeButton: true,
            buttonList: false,
            buttonMap: {
              enable: true,
              remove: true
            }
          })

          expectGroup(pages.demo.dynamicControls.superGroup).not.toExist({
            checkbox: true
          })
        })
      }
    }))
  })

  testcase("toEventuallyExist", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyExist({timeout: 500})
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyExist({timeout: 500})

          expectList(pages.demo.dynamicControls.buttonList).toEventuallyExist()
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyExist({filterMask: true})
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyExist({filterMask: false})

          pages.demo.dynamicControls.buttonList.wait.exists()

          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyExist()
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyExist({filterMask: true})
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyExist({filterMask: false})

          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyExist()
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyExist({timeout: 500})
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyExist({timeout: 500, filterMask: {
            enable: true,
            remove: true
          }})
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyExist()
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyExist({timeout: 500})
          expectGroup(pages.demo.dynamicControls.superGroup).not.toEventuallyExist({timeout: 500})
          expectGroup(pages.demo.dynamicControls.superGroup).not.toEventuallyExist({timeout: 500, filterMask: {
            checkbox: true,
            buttons: {
              removeButton: true,
              buttonList: [true],
              buttonMap: {
                enable: true
              }
            }
          }})

          expectElement(pages.demo.dynamicControls.nonExistingDiv).toEventuallyExist()
          expectElement(pages.demo.dynamicControls.nonExistingDiv).toEventuallyExist({timeout: 500})
        })
      }
    }))
  })

  testcase("toBeVisible", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          expectElement(pages.demo.dynamicControls.removeButton).not.toBeVisible()
          expectList(pages.demo.dynamicControls.buttonList).not.toBeVisible()
          expectMap(pages.demo.dynamicControls.buttonMap).not.toBeVisible()
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toBeVisible()
          expectGroup(pages.demo.dynamicControls.superGroup).not.toBeVisible()

          expectMap(pages.demo.dynamicControls.buttonMap).not.toBeVisible({
            enable: true
          })
          expectGroup(pages.demo.dynamicControls.superGroup).not.toBeVisible({
            checkbox: true
          })
        })
      }
    }))
  })

  testcase("toBeSelected", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dropdown'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dropdown.defaultOption).toBeSelected()
          expectElement(pages.demo.dropdown.defaultOption).not.toBeSelected()

          expectElement(pages.demo.dropdown.defaultOption).toEventuallyBeSelected()
          expectElement(pages.demo.dropdown.defaultOption).not.toEventuallyBeSelected({
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toBeChecked", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.checkbox).toBeChecked()
          expectElement(pages.demo.dynamicControls.checkbox).not.toBeChecked()

          expectElement(pages.demo.dynamicControls.checkbox).toEventuallyBeChecked({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkbox).not.toEventuallyBeChecked()

          pages.demo.dynamicControls.checkbox.click()

          expectElement(pages.demo.dynamicControls.checkbox).toBeChecked()
          expectElement(pages.demo.dynamicControls.checkbox).not.toBeChecked()

          expectElement(pages.demo.dynamicControls.checkbox).toEventuallyBeChecked()
          expectElement(pages.demo.dynamicControls.checkbox).not.toEventuallyBeChecked({
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveHTML", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          const fullHTML = '<input type="checkbox" label="blah"> A checkbox'

          expectElement(pages.demo.dynamicControls.checkboxContainer).toHaveHTML(fullHTML)
          expectElement(pages.demo.dynamicControls.checkboxContainer).not.toHaveHTML(fullHTML)

          expectElement(pages.demo.dynamicControls.checkboxContainer).toEventuallyHaveHTML(fullHTML, {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkboxContainer).not.toEventuallyHaveHTML(fullHTML, {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveAnyHTML", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.checkboxContainer).toHaveAnyHTML()
          expectElement(pages.demo.dynamicControls.checkboxContainer).not.toHaveAnyHTML()

          expectElement(pages.demo.dynamicControls.checkboxContainer).toEventuallyHaveAnyHTML({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkboxContainer).not.toEventuallyHaveAnyHTML({
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toContainHTML", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          const partialHTML = '<input type="checkbox" label="blah">'

          expectElement(pages.demo.dynamicControls.checkboxContainer).toContainHTML(partialHTML)
          expectElement(pages.demo.dynamicControls.checkboxContainer).not.toContainHTML(partialHTML)

          expectElement(pages.demo.dynamicControls.checkboxContainer).toEventuallyContainHTML(partialHTML, {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkboxContainer).not.toEventuallyContainHTML(partialHTML, {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          expectList(pages.demo.dynamicControls.buttonList).toHaveText(['asdf', 'asdf'])
          expectList(pages.demo.dynamicControls.buttonList).toHaveText(['Remove', 'Enable'])

          expectElement(pages.demo.dynamicControls.removeButton).not.toHaveText('Remove')
          expectList(pages.demo.dynamicControls.buttonList).not.toHaveText('Remove')
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveText({
            remove: 'Remove',
            enable: 'Enable'
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveText({
            removeButton: 'Remove',
            enableButton: 'Enable',
            buttonList: ['Remove', 'Enable'],
            buttonMap: {
              remove: 'Remove',
              enable: 'Enable'
            }
          })
          expectGroup(pages.demo.dynamicControls.superGroup).not.toHaveText({
            checkbox: '',
            buttons: {
              removeButton: 'Remove'
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyHaveText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveText(['asdf', 'asdf'])
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveText(['Remove', 'Enable'])

          expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyHaveText('Remove')
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveText('Remove')
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveText({
            remove: 'Remove',
            enable: 'Enable'
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).toEventuallyHaveText({
            removeButton: 'Remove',
            enableButton: 'Enable',
            buttonList: ['Remove', 'Enable'],
            buttonMap: {
              remove: 'Remove',
              enable: 'Enable'
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveText({
            removeButton: 'Remove',
            enableButton: 'Enable',
            buttonList: ['Remove', 'Enable'],
            buttonMap: {
              remove: 'Remove',
              enable: 'Enable'
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveText({
            removeButton: 'Remove',
            enableButton: 'Enable',
            buttonList: ['Remove', 'Enable'],
            buttonMap: {
              remove: 'Remove',
              enable: 'Enable'
            }
          }, {timeout: 1111})
          expectGroup(pages.demo.dynamicControls.superGroup).not.toEventuallyHaveText({
            checkbox: '',
            buttons: {
              removeButton: 'Remove',
            }
          })
          expectGroup(pages.demo.dynamicControls.superGroup).toEventuallyHaveText({
            checkbox: '',
            buttons: {
              removeButton: 'Remove',
            }
          })
        })
      }
    }))
  })

  testcase("toHaveAnyText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).toHaveAnyText()
          expectElement(pages.demo.dynamicControls.removeButton).not.toHaveAnyText()

          expectList(pages.demo.dynamicControls.buttonList).toHaveAnyText()
          expectList(pages.demo.dynamicControls.buttonList).not.toHaveAnyText()

          console.log(pages.demo.dynamicControls.buttonList.currently.not.hasAnyText(true))
          console.log(pages.demo.dynamicControls.buttonList.currently.not.hasAnyText(false))
          console.log(pages.demo.dynamicControls.buttonList.currently.not.hasAnyText([true, false]))

          expectList(pages.demo.dynamicControls.buttonList).not.toHaveAnyText(true)
          expectList(pages.demo.dynamicControls.buttonList).not.toHaveAnyText(false)
          expectList(pages.demo.dynamicControls.buttonList).not.toHaveAnyText([true, false])

          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveAnyText({
            remove: true,
            enable: false
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveAnyText({
            remove: false,
            enable: false
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveAnyText({})
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveAnyText()
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText({
            removeButton: true,
            enableButton: true,
            buttonList: [true, true],
            buttonMap: {
              remove: true,
              enable: true
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText({
            removeButton: true,
            enableButton: false,
            buttonList: true,
            buttonMap: {
              remove: true,
              enable: false
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText({
            removeButton: true,
            buttonList: false,
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText(null)
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText()
          expectGroup(pages.demo.dynamicControls.superGroup).not.toHaveAnyText({
            checkbox: true,
            removeButton: true,
            buttons: {
              removeButton: true
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyHaveAnyText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).toEventuallyHaveAnyText({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyHaveAnyText({
            timeout: 1111
          })

          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveAnyText()
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveAnyText()

          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: true
          })
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: false
          })
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: [true, false]
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              remove: true,
              enable: false
            }
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              remove: false,
              enable: false
            }
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveAnyText({
            timeout: 1111
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveAnyText()
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              removeButton: true,
              enableButton: true,
              buttonList: [true, true],
              buttonMap: {
                remove: true,
                enable: true
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              removeButton: true,
              enableButton: false,
              buttonList: true,
              buttonMap: {
                remove: true,
                enable: false
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              removeButton: true,
              buttonList: false,
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText(null)
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText({
            timeout: 1111
          })
          expectGroup(pages.demo.dynamicControls.superGroup).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              checkbox: true,
              removeButton: true,
              buttons: {
                removeButton: true
              }
            }
          })
        })
      }
    }))
  })

  testcase("toContainText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toContainText('move')

          expectList(pages.demo.dynamicControls.buttonList).toContainText(['asdf', 'asdf'])
          expectList(pages.demo.dynamicControls.buttonList).toContainText(['move', 'nab'])
          expectList(pages.demo.dynamicControls.buttonList).not.toContainText('move')

          expectMap(pages.demo.dynamicControls.buttonMap).not.toContainText({
            remove: 'move',
            enable: 'nab'
          })

          expectMap(pages.demo.dynamicControls.buttonMap).toContainText({
            remove: 'move',
            enable: 'nab'
          })

          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toContainText({
            removeButton: 'move',
            enableButton: 'nab',
            buttonList: ['move', 'nab'],
            buttonMap: {
              remove: 'move',
              enable: 'nab'
            }
          })

          expectGroup(pages.demo.dynamicControls.buttonGroup).toContainText({
            removeButton: 'move',
            enableButton: 'nab',
            buttonList: ['move', 'nab'],
            buttonMap: {
              remove: 'move',
              enable: 'nab'
            }
          })

          expectGroup(pages.demo.dynamicControls.superGroup).not.toContainText({
            checkbox: '',
            buttons: {
              removeButton: 'move'
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyContainText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyContainText('mov')

          expectList(pages.demo.dynamicControls.buttonList).toEventuallyContainText(['asdf', 'asdf'])
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyContainText(['mov', 'nab'])
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyContainText('mov')

          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyContainText({
            remove: 'mov',
            enable: 'nab'
          })

          expectGroup(pages.demo.dynamicControls.buttonGroup).toEventuallyContainText({
            removeButton: 'mov',
            enableButton: 'nab',
            buttonList: ['mov', 'nab'],
            buttonMap: {
              remove: 'mov',
              enable: 'nab'
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyContainText({
            removeButton: 'mov',
            enableButton: 'nab',
            buttonList: ['mov', 'nab'],
            buttonMap: {
              remove: 'mov',
              enable: 'nab'
            }
          }, {timeout: 1111})
          expectGroup(pages.demo.dynamicControls.superGroup).not.toEventuallyContainText({
            checkbox: '',
            buttons: {
              removeButton: 'mov',
            }
          })
          expectGroup(pages.demo.dynamicControls.superGroup).toEventuallyContainText({
            checkbox: '',
            buttons: {
              removeButton: 'mov',
            }
          })
        })
      }
    }))
  })

  testcase("toHaveDirectText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toHaveDirectText('Remove')
          expectList(pages.demo.dynamicControls.buttonList).toHaveDirectText(['asdf', 'asdf'])
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveDirectText({
            remove: 'Remove',
            enable: 'Enable'
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveDirectText({
            removeButton: 'Remove',
            enableButton: 'Enable',
            buttonList: ['Remove', 'Enable'],
            buttonMap: {
              remove: 'Remove',
              enable: 'Enable'
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyHaveDirectText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyHaveDirectText('Remove')
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveDirectText(['asdf', 'asdf'])
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveDirectText({
            remove: 'Remove',
            enable: 'Enable'
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveDirectText({
            removeButton: 'Remove',
            enableButton: 'Enable',
            buttonList: ['Remove', 'Enable'],
            buttonMap: {
              remove: 'Remove',
              enable: 'Enable'
            }
          }, {timeout: 1111})
        })
      }
    }))
  })

  testcase("toHaveAnyDirectText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toHaveAnyDirectText()
          expectList(pages.demo.dynamicControls.buttonList).not.toHaveAnyDirectText()
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveAnyDirectText()
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyDirectText({
            removeButton: true,
            enableButton: true,
            buttonList: [true, true],
            buttonMap: {
              remove: true,
              enable: true
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyHaveAnyDirectText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyHaveAnyDirectText({
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveAnyDirectText({
            timeout: 1111,
            filterMask: true
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveAnyDirectText({
            timeout: 1111,
            filterMask: {
              remove: true,
              enable: true
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyDirectText({
            timeout: 1111,
            filterMask: {
              removeButton: true,
              enableButton: true,
              buttonList: [true, true],
              buttonMap: {
                remove: true,
                enable: true
              }
            }
          })
        })
      }
    }))
  })

  testcase("toContainDirectText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toContainDirectText('move')
          expectList(pages.demo.dynamicControls.buttonList).toContainDirectText(['asdf', 'asdf'])
          expectMap(pages.demo.dynamicControls.buttonMap).not.toContainDirectText({
            remove: 'move',
            enable: 'nab'
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toContainDirectText({
            removeButton: 'move',
            enableButton: 'nab',
            buttonList: ['move', 'nab'],
            buttonMap: {
              remove: 'move',
              enable: 'nab'
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyContainDirectText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyContainDirectText('mov')
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyContainDirectText(['asdf', 'asdf'])
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyContainDirectText({
            remove: 'mov',
            enable: 'nab'
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyContainDirectText({
            removeButton: 'mov',
            enableButton: 'nab',
            buttonList: ['mov', 'nab'],
            buttonMap: {
              remove: 'mov',
              enable: 'nab'
            }
          }, {timeout: 1111})
        })
      }
    }))
  })

  testcase("toHaveAttribute", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          const attribute: Workflo.IAttribute = {
            name: 'label',
            value: 'blah'
          }
          const falseAttribute: Workflo.IAttribute = {
            name: 'label',
            value: 'asdf'
          }

          expectElement(pages.demo.dynamicControls.checkbox).toHaveAttribute(attribute)
          expectElement(pages.demo.dynamicControls.checkbox).not.toHaveAttribute(attribute)

          expectElement(pages.demo.dynamicControls.checkbox).toHaveAttribute(falseAttribute)
          expectElement(pages.demo.dynamicControls.checkbox).not.toHaveAttribute(falseAttribute)

          expectElement(pages.demo.dynamicControls.checkbox).toEventuallyHaveAttribute(attribute, {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkbox).not.toEventuallyHaveAttribute(attribute, {
            timeout: 1111
          })

          expectElement(pages.demo.dynamicControls.checkbox).toEventuallyHaveAttribute(falseAttribute, {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkbox).not.toEventuallyHaveAttribute(falseAttribute, {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveAnyAttribute", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.checkbox).toHaveAnyAttribute('label')
          expectElement(pages.demo.dynamicControls.checkbox).not.toHaveAnyAttribute('label')

          expectElement(pages.demo.dynamicControls.checkbox).toEventuallyHaveAnyAttribute('label', {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkbox).not.toEventuallyHaveAnyAttribute('label', {
            timeout: 1111
          })

          expectElement(pages.demo.dynamicControls.checkbox).toEventuallyHaveAnyAttribute('label', {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toContainAttribute", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          const partialAttribute: Workflo.IAttribute = {
            name: 'label',
            value: 'bla'
          }
          const falseAttribute: Workflo.IAttribute = {
            name: 'label',
            value: 'asdf'
          }

          expectElement(pages.demo.dynamicControls.checkbox).toContainAttribute(partialAttribute)
          expectElement(pages.demo.dynamicControls.checkbox).not.toContainAttribute(partialAttribute)
          expectElement(pages.demo.dynamicControls.checkbox).toContainAttribute(falseAttribute)
          expectElement(pages.demo.dynamicControls.checkbox).not.toContainAttribute(falseAttribute)

          expectElement(pages.demo.dynamicControls.checkbox).toEventuallyContainAttribute(partialAttribute, {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkbox).not.toEventuallyContainAttribute(
            partialAttribute, {timeout: 1111}
          )
          expectElement(pages.demo.dynamicControls.checkbox).toEventuallyContainAttribute(falseAttribute, {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkbox).not.toEventuallyContainAttribute(
            falseAttribute, {timeout: 1111}
          )
        })
      }
    }))
  })

  testcase("toHaveClass", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.footer).toHaveClass('row')
          expectElement(pages.demo.dynamicControls.footer).not.toHaveClass('row')

          expectElement(pages.demo.dynamicControls.footer).toHaveClass('jodel')
          expectElement(pages.demo.dynamicControls.footer).not.toHaveClass('jodel')

          expectElement(pages.demo.dynamicControls.footer).toEventuallyHaveClass('row', {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyHaveClass('row', {
            timeout: 1111
          })

          expectElement(pages.demo.dynamicControls.footer).toEventuallyHaveClass('jodel', {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyHaveClass('jodel', {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveAnyClass", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.checkboxContainer).toHaveAnyClass()
          expectElement(pages.demo.dynamicControls.footer).not.toHaveAnyClass()

          expectElement(pages.demo.dynamicControls.checkboxContainer).toEventuallyHaveAnyClass({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyHaveAnyClass({
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toContainClass", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.footer).toContainClass('ro')
          expectElement(pages.demo.dynamicControls.footer).not.toContainClass('ro')

          expectElement(pages.demo.dynamicControls.footer).toContainClass('jodel')
          expectElement(pages.demo.dynamicControls.footer).not.toContainClass('jodel')

          expectElement(pages.demo.dynamicControls.footer).toEventuallyContainClass('ro', {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyContainClass('ro', {
            timeout: 1111
          })

          expectElement(pages.demo.dynamicControls.footer).toEventuallyContainClass('jodel', {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyContainClass('jodel', {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveId", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.footer).toHaveId('page-footer')
          expectElement(pages.demo.dynamicControls.footer).not.toHaveId('page-footer')

          expectElement(pages.demo.dynamicControls.footer).toHaveId('jodel')
          expectElement(pages.demo.dynamicControls.footer).not.toHaveId('jodel')

          expectElement(pages.demo.dynamicControls.footer).toEventuallyHaveId('page-footer', {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyHaveId('page-footer', {
            timeout: 1111
          })

          expectElement(pages.demo.dynamicControls.footer).toEventuallyHaveId('jodel', {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyHaveId('jodel', {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveAnyId", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.checkbox).toHaveAnyId()
          expectElement(pages.demo.dynamicControls.footer).not.toHaveAnyId()

          expectElement(pages.demo.dynamicControls.checkbox).toEventuallyHaveAnyId({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyHaveAnyId({
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toContainId", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.footer).toContainId('page-foote')
          expectElement(pages.demo.dynamicControls.footer).not.toContainId('page-foote')

          expectElement(pages.demo.dynamicControls.footer).toContainId('jodel')
          expectElement(pages.demo.dynamicControls.footer).not.toContainId('jodel')

          expectElement(pages.demo.dynamicControls.footer).toEventuallyContainId('page-foote', {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyContainId('page-foote', {
            timeout: 1111
          })

          expectElement(pages.demo.dynamicControls.footer).toEventuallyContainId('jodel', {
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.footer).not.toEventuallyContainId('jodel', {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveName", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.login.usernameById).toHaveName('username')
          expectElement(pages.demo.login.usernameById).not.toHaveName('username')

          expectElement(pages.demo.login.usernameById).toHaveName('jodel')
          expectElement(pages.demo.login.usernameById).not.toHaveName('jodel')

          expectElement(pages.demo.login.usernameById).toEventuallyHaveName('username', {
            timeout: 1111
          })
          expectElement(pages.demo.login.usernameById).not.toEventuallyHaveName('username', {
            timeout: 1111
          })

          expectElement(pages.demo.login.usernameById).toEventuallyHaveName('jodel', {
            timeout: 1111
          })
          expectElement(pages.demo.login.usernameById).not.toEventuallyHaveName('jodel', {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveAnyName", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.login.usernameById).toHaveAnyName()
          expectElement(pages.demo.login.usernameById).not.toHaveAnyName()

          expectElement(pages.demo.login.usernameById).toEventuallyHaveAnyName({
            timeout: 1111
          })
          expectElement(pages.demo.login.usernameById).not.toEventuallyHaveAnyName({
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toContainName", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.login.usernameById).toContainName('ser')
          expectElement(pages.demo.login.usernameById).not.toContainName('ser')

          expectElement(pages.demo.login.usernameById).toContainName('jodel')
          expectElement(pages.demo.login.usernameById).not.toContainName('jodel')

          expectElement(pages.demo.login.usernameById).toEventuallyContainName('ser', {
            timeout: 1111
          })
          expectElement(pages.demo.login.usernameById).not.toEventuallyContainName('ser', {
            timeout: 1111
          })

          expectElement(pages.demo.login.usernameById).toEventuallyContainName('jodel', {
            timeout: 1111
          })
          expectElement(pages.demo.login.usernameById).not.toEventuallyContainName('jodel', {
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveLocation", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          // WORKS

          expectElement(pages.demo.login.loginButton).not.toHaveLocation({x: 10, y: 10}, {x: 2, y: 2})
          expectElement(pages.demo.login.loginButton).not.toHaveLocation({x: 10, y: 10}, {y: 2})
          expectElement(pages.demo.login.loginButton).not.toHaveLocation({x: 10, y: 10})

          expectElement(pages.demo.login.loginButton).toHaveLocation({x: 147, y: 342.390625}, {x: 20, y: 20})
          expectElement(pages.demo.login.loginButton).toHaveLocation({x: 147, y: 342.390625}, {y: 20})
          expectElement(pages.demo.login.loginButton).toHaveLocation({x: 147, y: 342.390625})

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveLocation(
            {x: 10, y: 10}, {tolerances: {x: 2, y: 2}, timeout: 2000}
          )
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveLocation(
            {x: 10, y: 10}, {tolerances: {y: 2}}
          )
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveLocation(
            {x: 10, y: 10}
          )

          expectElement(pages.demo.login.loginButton).toEventuallyHaveLocation(
            {x: 147, y: 342.390625}, {tolerances: {x: 20, y: 20}}
          )
          expectElement(pages.demo.login.loginButton).toEventuallyHaveLocation(
            {x: 147, y: 342.390625}, {tolerances: {y: 20}}
          )
          expectElement(pages.demo.login.loginButton).toEventuallyHaveLocation(
            {x: 147, y: 342.390625}
          )

          // DOES NOT WORK

          expectElement(pages.demo.login.loginButton).toHaveLocation({x: 10, y: 10}, {x: 2, y: 2})
          expectElement(pages.demo.login.loginButton).toHaveLocation({x: 10, y: 10}, {y: 2})
          expectElement(pages.demo.login.loginButton).toHaveLocation({x: 10, y: 10})

          expectElement(pages.demo.login.loginButton).not.toHaveLocation({x: 147, y: 342.390625}, {x: 20, y: 20})
          expectElement(pages.demo.login.loginButton).not.toHaveLocation({x: 147, y: 342.390625}, {y: 20})
          expectElement(pages.demo.login.loginButton).not.toHaveLocation({x: 147, y: 342.390625})

          expectElement(pages.demo.login.loginButton).toEventuallyHaveLocation(
            {x: 10, y: 10}, {tolerances: {x: 2, y: 2}, timeout: 2000}
          )
          expectElement(pages.demo.login.loginButton).toEventuallyHaveLocation(
            {x: 10, y: 10}, {tolerances: {y: 2}}
          )
          expectElement(pages.demo.login.loginButton).toEventuallyHaveLocation(
            {x: 10, y: 10}
          )

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveLocation(
            {x: 147, y: 342.390625}, {tolerances: {x: 20, y: 20}}
          )
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveLocation(
            {x: 147, y: 342.390625}, {tolerances: {y: 20}}
          )
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveLocation(
            {x: 147, y: 342.390625}
          )
        })
      }
    }))
  })

  testcase("toHaveX", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          // WORKS

          expectElement(pages.demo.login.loginButton).not.toHaveX(10, 2)
          expectElement(pages.demo.login.loginButton).not.toHaveX(10)

          expectElement(pages.demo.login.loginButton).toHaveX(147, 20)
          expectElement(pages.demo.login.loginButton).toHaveX(147)

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveX(10, {tolerance: 2})
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveX(10)

          expectElement(pages.demo.login.loginButton).toEventuallyHaveX(147, {tolerance: 20})
          expectElement(pages.demo.login.loginButton).toEventuallyHaveX(147)


          // DOES NOT WORK

          expectElement(pages.demo.login.loginButton).toHaveX(10, 2)
          expectElement(pages.demo.login.loginButton).toHaveX(10)

          expectElement(pages.demo.login.loginButton).not.toHaveX(147, 20)
          expectElement(pages.demo.login.loginButton).not.toHaveX(147)

          expectElement(pages.demo.login.loginButton).toEventuallyHaveX(10, {tolerance: 2})
          expectElement(pages.demo.login.loginButton).toEventuallyHaveX(10)

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveX(147, {tolerance: 20})
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveX(147)
        })
      }
    }))
  })

  testcase("toHaveY", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          // WORKS

          expectElement(pages.demo.login.loginButton).not.toHaveY(10, 2)
          expectElement(pages.demo.login.loginButton).not.toHaveY(10)

          expectElement(pages.demo.login.loginButton).toHaveY(342.390625, 20)
          expectElement(pages.demo.login.loginButton).toHaveY(342.390625)

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveY(10, {tolerance: 2})
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveY(10)

          expectElement(pages.demo.login.loginButton).toEventuallyHaveY(342.390625, {tolerance: 20})
          expectElement(pages.demo.login.loginButton).toEventuallyHaveY(342.390625)

          // DOES NOT WORK

          expectElement(pages.demo.login.loginButton).toHaveY(10, 2)
          expectElement(pages.demo.login.loginButton).toHaveY(10)

          expectElement(pages.demo.login.loginButton).not.toHaveY(342.390625, 20)
          expectElement(pages.demo.login.loginButton).not.toHaveY(342.390625)

          expectElement(pages.demo.login.loginButton).toEventuallyHaveY(10, {tolerance: 2})
          expectElement(pages.demo.login.loginButton).toEventuallyHaveY(10)

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveY(342.390625, {tolerance: 20})
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveY(342.390625)
        })
      }
    }))
  })

  testcase("toHaveSize", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"2.1": [1]}, () => {

          // WORKS

          expectElement(pages.demo.login.loginButton).not.toHaveSize({width: 10, height: 10}, {width: 2, height: 2})
          expectElement(pages.demo.login.loginButton).not.toHaveSize({width: 10, height: 10}, {height: 2})
          expectElement(pages.demo.login.loginButton).not.toHaveSize({width: 10, height: 10})

          expectElement(pages.demo.login.loginButton).toHaveSize({width: 162, height: 59}, {width: 20, height: 20})
          expectElement(pages.demo.login.loginButton).toHaveSize({width: 162, height: 59}, {height: 20})
          expectElement(pages.demo.login.loginButton).toHaveSize({width: 162, height: 59})

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveSize(
            {width: 10, height: 10}, {tolerances: {width: 2, height: 2}, timeout: 2000}
          )
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveSize(
            {width: 10, height: 10}, {tolerances: {height: 2}}
          )
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveSize(
            {width: 10, height: 10}
          )

          expectElement(pages.demo.login.loginButton).toEventuallyHaveSize(
            {width: 162, height: 59}, {tolerances: {width: 20, height: 20}}
          )
          expectElement(pages.demo.login.loginButton).toEventuallyHaveSize(
            {width: 162, height: 59}, {tolerances: {height: 20}}
          )
          expectElement(pages.demo.login.loginButton).toEventuallyHaveSize(
            {width: 162, height: 59}
          )

          // DOES NOT WORK

          expectElement(pages.demo.login.loginButton).toHaveSize({width: 10, height: 10}, {width: 2, height: 2})
          expectElement(pages.demo.login.loginButton).toHaveSize({width: 10, height: 10}, {height: 2})
          expectElement(pages.demo.login.loginButton).toHaveSize({width: 10, height: 10})

          expectElement(pages.demo.login.loginButton).not.toHaveSize({width: 162, height: 59}, {width: 20, height: 20})
          expectElement(pages.demo.login.loginButton).not.toHaveSize({width: 162, height: 59}, {height: 20})
          expectElement(pages.demo.login.loginButton).not.toHaveSize({width: 162, height: 59})

          expectElement(pages.demo.login.loginButton).toEventuallyHaveSize(
            {width: 10, height: 10}, {tolerances: {width: 2, height: 2}, timeout: 2000}
          )
          expectElement(pages.demo.login.loginButton).toEventuallyHaveSize(
            {width: 10, height: 10}, {tolerances: {height: 2}}
          )
          expectElement(pages.demo.login.loginButton).toEventuallyHaveSize(
            {width: 10, height: 10}
          )

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveSize(
            {width: 162, height: 59}, {tolerances: {width: 20, height: 20}}
          )
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveSize(
            {width: 162, height: 59}, {tolerances: {height: 20}}
          )
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveSize(
            {width: 162, height: 59}
          )
        })
      }
    }))
  })

  testcase("toHaveWidth", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          // WORKS

          expectElement(pages.demo.login.loginButton).not.toHaveWidth(10, 2)
          expectElement(pages.demo.login.loginButton).not.toHaveWidth(10)

          expectElement(pages.demo.login.loginButton).toHaveWidth(162, 20)
          expectElement(pages.demo.login.loginButton).toHaveWidth(162)

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveWidth(10, {tolerance: 2})
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveWidth(10)

          expectElement(pages.demo.login.loginButton).toEventuallyHaveWidth(162, {tolerance: 20})
          expectElement(pages.demo.login.loginButton).toEventuallyHaveWidth(162)


          // DOES NOT WORK

          expectElement(pages.demo.login.loginButton).toHaveWidth(10, 2)
          expectElement(pages.demo.login.loginButton).toHaveWidth(10)

          expectElement(pages.demo.login.loginButton).not.toHaveWidth(162, 20)
          expectElement(pages.demo.login.loginButton).not.toHaveWidth(162)

          expectElement(pages.demo.login.loginButton).toEventuallyHaveWidth(10, {tolerance: 2})
          expectElement(pages.demo.login.loginButton).toEventuallyHaveWidth(10)

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveWidth(162, {tolerance: 20})
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveWidth(162)
        })
      }
    }))
  })

  testcase("toHaveHeight", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'login'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          // WORKS

          expectElement(pages.demo.login.loginButton).not.toHaveHeight(10, 2)
          expectElement(pages.demo.login.loginButton).not.toHaveHeight(10)

          expectElement(pages.demo.login.loginButton).toHaveHeight(59, 20)
          expectElement(pages.demo.login.loginButton).toHaveHeight(59)

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveHeight(10, {tolerance: 2})
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveHeight(10)

          expectElement(pages.demo.login.loginButton).toEventuallyHaveHeight(59, {tolerance: 20})
          expectElement(pages.demo.login.loginButton).toEventuallyHaveHeight(59)


          // DOES NOT WORK

          expectElement(pages.demo.login.loginButton).toHaveHeight(10, 2)
          expectElement(pages.demo.login.loginButton).toHaveHeight(10)

          expectElement(pages.demo.login.loginButton).not.toHaveHeight(59, 20)
          expectElement(pages.demo.login.loginButton).not.toHaveHeight(59)

          expectElement(pages.demo.login.loginButton).toEventuallyHaveHeight(10, {tolerance: 2})
          expectElement(pages.demo.login.loginButton).toEventuallyHaveHeight(10)

          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveHeight(59, {tolerance: 20})
          expectElement(pages.demo.login.loginButton).not.toEventuallyHaveHeight(59)
        })
      }
    }))
  })

  testcase("toHaveValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.searchInput).toHaveValue('asdf')
          expectList(pages.demo.dynamicControls.inputList).toHaveValue('asdf')
          expectList(pages.demo.dynamicControls.inputList).toHaveValue(['on', ''])
          expectMap(pages.demo.dynamicControls.inputMap).toHaveValue({
            checkbox: 'on',
            search: 'asdf'
          })
          expectMap(pages.demo.dynamicControls.inputMap).not.toHaveValue({
            checkbox: 'on',
            search: 'asdf'
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toHaveValue({
            checkbox: 'on',
            search: '',
            inputList: ['on', ''],
            inputMap: {
              checkbox: 'on',
              search: ''
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).not.toHaveValue({
            checkbox: 'on',
            search: '',
            inputList: ['on', ''],
            inputMap: {
              checkbox: 'on',
              search: ''
            }
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toHaveValue({
            search: 'bla',
            innerGroup: {
              checkbox: 'bla',
              search: 'bla',
              inputList: ['bla', 'bli'],
              inputMap: {
                checkbox: 'bla',
                search: 'bla'
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toHaveValue({
            inputList: 'on'
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toHaveValue({
            search: '',
            innerGroup: {
              inputList: ['on', '']
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyHaveValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.searchInput).toEventuallyHaveValue('asdf', {
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveValue('asdf', {
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveValue(['on', ''])
          expectMap(pages.demo.dynamicControls.inputMap).toEventuallyHaveValue({
            checkbox: 'on',
            search: 'asdf'
          }, {timeout: 1111})
          expectMap(pages.demo.dynamicControls.inputMap).not.toEventuallyHaveValue({
            checkbox: 'on',
            search: 'asdf'
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toEventuallyHaveValue({
            checkbox: 'on',
            search: '',
            inputList: ['on', ''],
            inputMap: {
              checkbox: 'on',
              search: ''
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).not.toEventuallyHaveValue({
            checkbox: 'on',
            search: '',
            inputList: ['on', ''],
            inputMap: {
              checkbox: 'on',
              search: ''
            }
          }, {timeout: 3000})
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toEventuallyHaveValue({
            search: 'bla',
            innerGroup: {
              checkbox: 'bla',
              search: 'bla',
              inputList: ['bla', 'bli'],
              inputMap: {
                checkbox: 'bla',
                search: 'bla'
              }
            }
          }, {timeout: 1111})
        })
      }
    }))
  })

  testcase("toHaveAnyValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.searchInput).toHaveAnyValue()
          expectElement(pages.demo.dynamicControls.searchInput).not.toHaveAnyValue()

          expectList(pages.demo.dynamicControls.inputList).toHaveAnyValue()
          expectList(pages.demo.dynamicControls.inputList).not.toHaveAnyValue()
          expectList(pages.demo.dynamicControls.inputList).toHaveAnyValue(true)
          expectList(pages.demo.dynamicControls.inputList).toHaveAnyValue(false)
          expectList(pages.demo.dynamicControls.inputList).toHaveAnyValue([true, false])

          expectMap(pages.demo.dynamicControls.inputMap).toHaveAnyValue({
            checkbox: true,
            search: true
          })
          expectMap(pages.demo.dynamicControls.inputMap).toHaveAnyValue({
            checkbox: false,
            search: false
          })
          expectMap(pages.demo.dynamicControls.inputMap).toHaveAnyValue()

          expectGroup(pages.demo.dynamicControls.inputGroup).toHaveAnyValue({
            checkbox: true,
            search: true,
            inputList: [true, true],
            inputMap: {
              checkbox: true,
              search: true
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).not.toHaveAnyValue({
            checkbox: true,
            search: true,
            inputList: [true, true],
            inputMap: {
              checkbox: true,
              search: true
            }
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toHaveAnyValue({
            search: true,
            innerGroup: {
              checkbox: true,
              search: true,
              inputList: true,
              inputMap: {
                checkbox: true,
                search: true
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toHaveAnyValue({
            inputList: false
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toHaveAnyValue({
            search: true,
            innerGroup: {
              inputList: false
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyHaveAnyValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.searchInput).toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.searchInput).not.toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkboxInput).toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkboxInput).not.toEventuallyHaveAnyValue({
            timeout: 1111
          })

          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).not.toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: true
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: false
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: [true, false]
          })

          expectMap(pages.demo.dynamicControls.inputMap).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              checkbox: true,
              search: true
            }
          })
          expectMap(pages.demo.dynamicControls.inputMap).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              checkbox: false,
              search: false
            }
          })
          expectMap(pages.demo.dynamicControls.inputMap).toEventuallyHaveAnyValue({
            timeout: 1111
          })

          expectGroup(pages.demo.dynamicControls.inputGroup).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              checkbox: true,
              search: true,
              inputList: [true, true],
              inputMap: {
                checkbox: true,
                search: true
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).not.toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              checkbox: true,
              search: true,
              inputList: [true, true],
              inputMap: {
                checkbox: true,
                search: true
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              search: true,
              innerGroup: {
                checkbox: true,
                search: true,
                inputList: true,
                inputMap: {
                  checkbox: true,
                  search: true
                }
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              inputList: false
            }
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              search: true,
              innerGroup: {
                inputList: false
              }
            }
          })
        })
      }
    }))
  })

  testcase("toContainValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.searchInput).toContainValue('asdf')
          expectList(pages.demo.dynamicControls.inputList).toContainValue('asdf')
          expectList(pages.demo.dynamicControls.inputList).toContainValue(['on', ''])
          expectMap(pages.demo.dynamicControls.inputMap).toContainValue({
            checkbox: 'o',
            search: 'asdf'
          })
          expectMap(pages.demo.dynamicControls.inputMap).not.toContainValue({
            checkbox: 'o',
            search: 'asdf'
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toContainValue({
            checkbox: 'o',
            search: '',
            inputList: ['o', ''],
            inputMap: {
              checkbox: 'o',
              search: ''
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).not.toContainValue({
            checkbox: 'o',
            search: '',
            inputList: ['o', ''],
            inputMap: {
              checkbox: 'o',
              search: ''
            }
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toContainValue({
            search: 'bla',
            innerGroup: {
              checkbox: 'bla',
              search: 'bla',
              inputList: ['bla', 'bli'],
              inputMap: {
                checkbox: 'bla',
                search: 'bla'
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toContainValue({
            inputList: 'o'
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toContainValue({
            search: '',
            innerGroup: {
              inputList: ['o', '']
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyContainValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.searchInput).toEventuallyContainValue('asdf', {
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyContainValue('asdf', {
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyContainValue(['on', ''])
          expectMap(pages.demo.dynamicControls.inputMap).toEventuallyContainValue({
            checkbox: 'on',
            search: 'asdf'
          }, {timeout: 1111})
          expectMap(pages.demo.dynamicControls.inputMap).not.toEventuallyContainValue({
            checkbox: 'on',
            search: 'asdf'
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toEventuallyContainValue({
            checkbox: 'on',
            search: '',
            inputList: ['on', ''],
            inputMap: {
              checkbox: 'on',
              search: ''
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).not.toEventuallyContainValue({
            checkbox: 'on',
            search: '',
            inputList: ['on', ''],
            inputMap: {
              checkbox: 'on',
              search: ''
            }
          }, {timeout: 3000})
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toEventuallyContainValue({
            search: 'bla',
            innerGroup: {
              checkbox: 'bla',
              search: 'bla',
              inputList: ['bla', 'bli'],
              inputMap: {
                checkbox: 'bla',
                search: 'bla'
              }
            }
          }, {timeout: 1111})
        })
      }
    }))
  })

  testcase("toBeEmpty", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectList(pages.demo.dynamicControls.buttonList).toBeEmpty()
          expectList(pages.demo.dynamicControls.nonExistingButtonList).toBeEmpty()
          expectList(pages.demo.dynamicControls.buttonList).not.toBeEmpty()
          expectList(pages.demo.dynamicControls.nonExistingButtonList).not.toBeEmpty()
        })
      }
    }))
  })

  testcase("toEventuallyBeEmpty", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyBeEmpty({
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.nonExistingButtonList).toEventuallyBeEmpty()
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyBeEmpty()
          expectList(pages.demo.dynamicControls.nonExistingButtonList).not.toEventuallyBeEmpty({
            timeout: 1111
          })
        })
      }
    }))
  })

  testcase("toHaveLength", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectList(pages.demo.dynamicControls.buttonList).toHaveLength(2)
          expectList(pages.demo.dynamicControls.buttonList).toHaveLength(1)

          expectList(pages.demo.dynamicControls.buttonList).toHaveLength(1, Workflo.Comparator.gt)
          expectList(pages.demo.dynamicControls.buttonList).toHaveLength(2, Workflo.Comparator.gt)

          expectList(pages.demo.dynamicControls.buttonList).toHaveLength(2, Workflo.Comparator.lt)
          expectList(pages.demo.dynamicControls.buttonList).toHaveLength(3, Workflo.Comparator.lt)

          expectList(pages.demo.dynamicControls.buttonList).toHaveLength(2, Workflo.Comparator.ne)
          expectList(pages.demo.dynamicControls.buttonList).toHaveLength(3, Workflo.Comparator.ne)
        })
      }
    }))
  })

  testcase("toEventuallyHaveLength", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveLength(2)
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveLength(1)

          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveLength(1, {
            timeout: 1111,
            comparator: Workflo.Comparator.gt
          })
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveLength(2, {
            comparator: Workflo.Comparator.gt
          })

          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveLength(2, {
            timeout: 1111,
            comparator: Workflo.Comparator.lt
          })
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveLength(3, {
            comparator: Workflo.Comparator.lt
          })

          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveLength(2, {
            timeout: 1111,
            comparator: Workflo.Comparator.ne
          })
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveLength(3, {
            timeout: 1111,
            comparator: Workflo.Comparator.ne
          })
        })
      }
    }))
  })
})