import { steps } from '?/steps'
import { pages } from '?/page_objects'
import { pageObjects } from 'wdio-workflo'

suite("FilterMask Suite", {}, () => {
  testcase("list get", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask list", pages.demo.dynamicControls.buttonList.getText())
          console.log("true filterMask list", pages.demo.dynamicControls.buttonList.getText(true))
          console.log("false filterMask list", pages.demo.dynamicControls.buttonList.getText(false))
          console.log("array filterMask list", pages.demo.dynamicControls.buttonList.getText([true, false]))
          console.log("undefined null array filterMask list",
            pages.demo.dynamicControls.buttonList.getText([undefined, null]))
          console.log("null filterMask list", pages.demo.dynamicControls.buttonList.getText(null))
        })
      }
    }))
  })

  testcase("map get", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask map", pages.demo.dynamicControls.buttonMap.getText())
          console.log("true filterMask map", pages.demo.dynamicControls.buttonMap.getText({
            enable: true,
            remove: true
          }))
          console.log("false filterMask map", pages.demo.dynamicControls.buttonMap.getText({
            enable: false,
            remove: false
          }))
          console.log("mixed filterMask map", pages.demo.dynamicControls.buttonMap.getText({
            enable: true,
            remove: false
          }))
          console.log("null filterMask map", pages.demo.dynamicControls.buttonMap.getText(null))
          console.log("undefined or null filterMask map", pages.demo.dynamicControls.buttonMap.getText({
            enable: null,
            remove: undefined
          }))
        })
      }
    }))
  })

  testcase("group get", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask group", pages.demo.dynamicControls.buttonGroup.getText())
          console.log("true filterMask group", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: true,
            removeButton: true,
            buttonList: true,
            buttonMap: {
              enable: true,
              remove: true
            }
          }))
          console.log("false filterMask group", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: false,
            removeButton: false,
            buttonList: false,
            buttonMap: {
              enable: false,
              remove: false
            }
          }))
          console.log("mixed filterMask group", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: false,
            removeButton: true,
            buttonList: false,
            buttonMap: {
              enable: true,
              remove: false
            }
          }))
          console.log("mixed filterMask group with list", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: false,
            removeButton: true,
            buttonList: [false, false],
            buttonMap: {
              enable: true,
              remove: false
            }
          }))
          console.log("null filterMask group", pages.demo.dynamicControls.buttonGroup.getText(null))
          console.log("undefined or null filterMask group", pages.demo.dynamicControls.buttonGroup.getText({
            enableButton: undefined,
            removeButton: null,
            buttonList: undefined,
            buttonMap: null
          }))
        })
      }
    }))
  })

  testcase("list has", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText())
          console.log("true filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText(true))
          console.log("false filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText(false))
          console.log("array filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText([true, false]))
          console.log("undefined null array filterMask list",
            pages.demo.dynamicControls.buttonList.getHasAnyText([undefined, null]))
          console.log("null filterMask list", pages.demo.dynamicControls.buttonList.getHasAnyText(null))
        })
      }
    }))
  })

  testcase("map has", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask map", pages.demo.dynamicControls.buttonMap.getHasAnyText())
          console.log("true filterMask map", pages.demo.dynamicControls.buttonMap.getHasAnyText({
            enable: true,
            remove: true
          }))
          console.log("false filterMask map", pages.demo.dynamicControls.buttonMap.getHasAnyText({
            enable: false,
            remove: false
          }))
          console.log("mixed filterMask map", pages.demo.dynamicControls.buttonMap.getHasAnyText({
            enable: true,
            remove: false
          }))
          console.log("null filterMask map", pages.demo.dynamicControls.buttonMap.getHasAnyText(null))
          console.log("undefined or null filterMask map", pages.demo.dynamicControls.buttonMap.getHasAnyText({
            enable: null,
            remove: undefined
          }))
        })
      }
    }))
  })

  testcase("group has", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          console.log("no filterMask group", pages.demo.dynamicControls.buttonGroup.getHasAnyText())
          console.log("true filterMask group", pages.demo.dynamicControls.buttonGroup.getHasAnyText({
            enableButton: true,
            removeButton: true,
            buttonList: true,
            buttonMap: {
              enable: true,
              remove: true
            }
          }))
          console.log("false filterMask group", pages.demo.dynamicControls.buttonGroup.getHasAnyText({
            enableButton: false,
            removeButton: false,
            buttonList: false,
            buttonMap: {
              enable: false,
              remove: false
            }
          }))
          console.log("mixed filterMask group", pages.demo.dynamicControls.buttonGroup.getHasAnyText({
            enableButton: false,
            removeButton: true,
            buttonList: false,
            buttonMap: {
              enable: true,
              remove: false
            }
          }))
          console.log("mixed filterMask group with list", pages.demo.dynamicControls.buttonGroup.getHasAnyText({
            enableButton: false,
            removeButton: true,
            buttonList: [false, false],
            buttonMap: {
              enable: true,
              remove: false
            }
          }))
          console.log("null filterMask group", pages.demo.dynamicControls.buttonGroup.getHasAnyText(null))
          console.log("undefined or null filterMask group", pages.demo.dynamicControls.buttonGroup.getHasAnyText({
            enableButton: undefined,
            removeButton: null,
            buttonList: undefined,
            buttonMap: null
          }))
        })
      }
    }))
  })

  testcase("list wait", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expect(() => pages.demo.dynamicControls.buttonList.wait.not.hasAnyText({
            filterMask: true,
            timeout: 800
          })).toThrowError('PageElement never not had any text within 800ms.\n( (//body//button)[1] )')

          expect(() => pages.demo.dynamicControls.buttonList.wait.not.hasAnyText({
            timeout: 800
          })).toThrowError(
            'PageElement never not had any text within 800ms.\n( (//body//button)[1] )'
          )

          expect(() => pages.demo.dynamicControls.buttonList.wait.not.hasAnyText({
            filterMask: [true, false],
            timeout: 800
          })).toThrowError('PageElement never not had any text within 800ms.\n( (//body//button)[1] )')

          expect(() => pages.demo.dynamicControls.buttonList.wait.not.hasAnyText({
            filterMask: [false, false],
            timeout: 800
          })).not.toThrowError()
        })
      }
    }))
  })

  testcase("map wait", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expect(() => pages.demo.dynamicControls.buttonMap.wait.not.hasAnyText({
            filterMask: {
              enable: true,
              remove: true
            },
            timeout: 800
          })).toThrowError("PageElement never not had any text within 800ms.\n( //body//button[. = 'Remove'] )")

          expect(() => pages.demo.dynamicControls.buttonMap.wait.not.hasAnyText({
            timeout: 800
          })).toThrowError(
            "PageElement never not had any text within 800ms.\n( //body//button[. = 'Remove'] )"
          )

          expect(() => pages.demo.dynamicControls.buttonMap.wait.not.hasAnyText({
            filterMask: {
              enable: true,
              remove: false
            },
            timeout: 800
          })).toThrowError("PageElement never not had any text within 800ms.\n( //body//button[. = 'Enable'] )")

          expect(() => pages.demo.dynamicControls.buttonMap.wait.not.hasAnyText({
            filterMask: {
              enable: false,
              remove: false
            },
            timeout: 800
          })).not.toThrowError()
        })
      }
    }))
  })

  testcase("group wait", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expect(() => pages.demo.dynamicControls.buttonGroup.wait.not.hasAnyText({
            filterMask: {
              enableButton: true,
              removeButton: true,
              buttonList: true,
              buttonMap: {
                enable: true,
                remove: true
              }
            },
            timeout: 800
          })).toThrowError("PageElement never not had any text within 800ms.\n( //body//button[. = 'Remove'] )")

          expect(() => pages.demo.dynamicControls.buttonGroup.wait.not.hasAnyText({
            timeout: 800
          })).toThrowError(
            "PageElement never not had any text within 800ms.\n( //body//button[. = 'Remove'] )"
          )

          expect(() => pages.demo.dynamicControls.buttonGroup.wait.not.hasAnyText({
            filterMask: {
              enableButton: true,
              removeButton: false,
              buttonList: true,
              buttonMap: {
                enable: true,
                remove: false
              }
            },
            timeout: 800
          })).toThrowError("PageElement never not had any text within 800ms.\n( //body//button[. = 'Enable'] )")

          expect(() => pages.demo.dynamicControls.buttonGroup.wait.not.hasAnyText({
            filterMask: {
              enableButton: false,
              removeButton: false,
              buttonList: false,
              buttonMap: {
                enable: false,
                remove: false
              }
            },
            timeout: 800
          })).not.toThrowError()
        })
      }
    }))
  })

  testcase("list do", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          const texts: string[] = []
          const filteredTexts: string[] = []

          pages.demo.dynamicControls.buttonList.eachDo(
            element => texts.push(element.getText())
          )
          pages.demo.dynamicControls.buttonList.eachDo(
            element => filteredTexts.push(element.getText()),
            [false, true]
          )

          expect(texts).toEqual(['Remove', 'Enable'])
          expect(filteredTexts).toEqual(['Enable'])
        })
      }
    }))
  })

  testcase("map do", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          const texts: string[] = []
          const filteredTexts: string[] = []

          pages.demo.dynamicControls.buttonMap.eachDo(element => texts.push(element.getText()))
          pages.demo.dynamicControls.buttonMap.eachDo(
            element => filteredTexts.push(element.getText()),
            {
              enable: true,
              remove: false
            }
          )

          expect(texts).toEqual(['Remove', 'Enable'])
          expect(filteredTexts).toEqual(['Enable'])
        })
      }
    }))
  })

  testcase("group do", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          const buttonGroup = pages.demo.dynamicControls.buttonGroup

          const texts: string[] = []
          const filteredTexts: string[] = []

          buttonGroup.eachDo<Workflo.PageNode.IElementNode<
            Workflo.PageNode.ExtractText<typeof buttonGroup.$>,
            Workflo.PageNode.ExtractBoolean<typeof buttonGroup.$>,
            Workflo.PageNode.ExtractBoolean<typeof buttonGroup.$>
          >>(pageObjects.elements.isIElementNode, ({node}) => {
            const res = node.getText()

            texts.push(JSON.stringify(res))
          })
          buttonGroup.eachDo<Workflo.PageNode.IElementNode<
            Workflo.PageNode.ExtractText<typeof buttonGroup.$>,
            Workflo.PageNode.ExtractBoolean<typeof buttonGroup.$>
          >>(pageObjects.elements.isIElementNode, ({node, filter}) => {
            const res = node.getText(filter)

            filteredTexts.push(JSON.stringify(res))
          }, {
            enableButton: true,
            buttonList: [false, true],
            buttonMap: {
              enable: true
            }
          })

          expect(texts).toEqual([
            '"Remove"',
            '"Enable"',
            '["Remove","Enable"]',
            '{"remove":"Remove","enable":"Enable"}'
          ])
          expect(filteredTexts).toEqual([
            '"Enable"',
            '["Enable"]',
            '{"enable":"Enable"}'
          ])
        })
      }
    }))
  })
})