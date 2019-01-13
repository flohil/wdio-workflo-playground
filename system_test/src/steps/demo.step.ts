import { defineSteps, Step, IOptStepParams, IStepParams } from 'wdio-workflo'
import { pages } from '?/page_objects'

const demoPageSteps = defineSteps({
  "open demopage %{path}":
  (params: IStepParams<{path: string}, void>) =>
    new Step(params, ({path}): void => {
      pages.demo.base.open({path})
    }),
  "enable input in demopage":
  (params?: IOptStepParams<{}, void>) =>
    new Step(params, (): void => {
      pages.demo.dynamicControls.enableButton.click()
    })
})

export { demoPageSteps }