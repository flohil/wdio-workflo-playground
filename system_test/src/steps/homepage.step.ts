import { defineSteps, Step, IOptStepParams, IStepParams } from 'wdio-workflo'
import { pages } from '?/page_objects'

const homePageSteps = defineSteps({
  "open url %{url}":
  (params: IStepParams<{url: string}, void>) =>
    new Step(params, ({url}): void => {
      browser.url(url)
      browser.pause(2000)
    }),
  "open homepage":
  (params?: IOptStepParams<{}, void>) =>
    new Step(params, (): void => {
      browser.url('/')
    }),
  "get title":
  (params?: IOptStepParams<{}, string>) =>
    new Step(params, (): string => {
      return browser.getTitle()
    }),
  "success":
  (params?: IOptStepParams<{}, void>) =>
    new Step(params, (): void => {
      const html = browser.element('//div[@id="asdfasdfasdf"]').getHTML()
    }),
  "failure":
  (params?: IOptStepParams<{}, void>) =>
    new Step(params, (): void => {
      browser.getUrl()
    }),
  "google %{term}":
  (params?: IStepParams<{term: string}, void>) =>
    new Step(params, ({term}): void => {
      pages.google.input.setValue(term)
      browser.buttonDown()
    }),
  "successful step":
  (params?: IOptStepParams<{}, void>) =>
    new Step(params, (): void => {
    }),
  "failing step":
  (params?: IOptStepParams<{}, void>) =>
    new Step(params, (): void => {
    }),
  "broken step":
  (params?: IOptStepParams<{}, void>) =>
    new Step(params, (): void => {
      // const el = core.stores.pageElement.Element('//div[@id="asdf"]')
      // el.click()

      pages.google.selectNonExisting()
    }),
  "test chaining functionality":
    (params?: IOptStepParams<{}, void>) =>
      new Step(params, (): void => {
        const logo = pages.google.logo

        console.log("logo", logo.getText())
        console.log("logo selector", logo.getSelector())

        const list = pages.google.list

        console.log('list length:', list.getLength())
        console.log("list selector", list.getSelector())

        console.log('logo inside group selector:', pages.google.logoGroup.$.logo.getSelector())

        // console.log('text group result: ', pages.google.logoGroup.getText({
        //   logo: '',
        //   logoList: [],
        //   anoLogoList: [],
        //   logoMap: {
        //     logo: '',
        //     logo2: ''
        //   }
        // }))

        // check that filter works

        /* console.log('text group result: ', pages.google.logoGroup.GetText({filter: {
          logoList: true,
          logoMap: true
        }})) */

        const divList = pages.google.divList
        const logoListElem = divList.where.classContains('logo-subtext').getFirst()

        console.log('logoListElem: ', logoListElem.getSelector())
        console.log('logoListElem: ', logoListElem.getText())

        const divMap = pages.google.divMap

        console.log('logoMapElem: ', divMap.$.logo.getSelector())
        console.log('logoMapElem: ', divMap.$.logo.getText())

        console.log(pages.google.input.getText())

        pages.google.input.setValue('Google')
        // pages.google.inputGroup.setValue({
        //   input: "Input",
        //   inputMap: {
        //     "search": "Jodel"
        //   },
        //   inputList: {
        //     "search": "Hallo du"
        //   },
        //   anoInputList: {
        //     '0': "index"
        //   }
        // })
      }),
})

export { homePageSteps }