import {defineSteps, proxifySteps} from 'wdio-workflo'

////////////////////////////////////////////////////////////
// EDIT THIS AREA TO CREATE A MERGED STEP DEFINITIONS OBJECT
////////////////////////////////////////////////////////////

// IMPORT YOUR STEP DEFINITIONS
import { homePageSteps } from '?/steps/homepage.step'
import { demoPageSteps } from '?/steps/demo.step'
import { toolsQAPageSteps } from '?/steps/toolsqa.step'

// MERGE ALL STEP DEFINITIONS IN ONE OBJECT AS SHOWN BELOW
const stepDefinitions = defineSteps({
  ...homePageSteps,
  ...demoPageSteps,
  ...toolsQAPageSteps
})

////////////////////////////////////////////////////////////

const steps = proxifySteps(stepDefinitions)

export {steps }