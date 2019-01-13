export * from './Page'

import { GooglePage } from './GooglePage'
import * as demo from './HerukoApp'
import { ToolsQAPage } from './ToolsQAPage'

export * from './GooglePage'

export const google = new GooglePage()
export const toolsQa = new ToolsQAPage()
export { demo }
