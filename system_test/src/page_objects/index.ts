// import page_objects from this file to ensure correct loading order and avoid circular dependencies
import * as elements from './page_elements'
import * as stores from './stores'
import * as dialogs from './dialogs'
import * as common from './common'
import * as pages from './pages'

export {
  elements,
  stores,
  pages,
  dialogs,
  common
}