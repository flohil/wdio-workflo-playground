import { defineSteps, Step, IOptStepParams } from 'wdio-workflo'
import { pages } from '?/page_objects'

const toolsQAPageSteps = defineSteps({
  "open toolsqa page %{path}":
  (params?: IOptStepParams<{path?: string}, void>) =>
    new Step(params, ({path}): void => {
      pages.toolsQa.open({path})
    }),
})

export { toolsQAPageSteps }