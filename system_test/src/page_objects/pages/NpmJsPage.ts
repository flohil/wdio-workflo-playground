import { Page, IPageOpts } from './Page'
import { stores } from '?/page_objects'

export interface IBasePageOpts<
  Store extends stores.PageElementStore
> extends IPageOpts<Store> {}

export class NpmJsPage extends Page<stores.PageElementStore> {

  constructor() {
    super({store: stores.pageElement})
  }

  get container() {
    return this._store.Element(
      xpath('//div').id('app')
    )
  }

  get searchButton() {
    return this.container.$.Element(
      xpath('//button').textContains('Search')
    )
  }

  get searchInputField() {
    return this.container.$.Input(
      xpath('//input').typeContains('search')
    )
  }

  get packageListContainer() {
    return this.container.$.Element(
      xpath('//div').classContains('packageList')
    )
  }

  get packageNamesList() {
    return this.packageListContainer.$.ElementList(
      xpath('//h3')
    )
  }

  isOpen(): boolean {
    return this.container.currently.isVisible()
  }

  isClosed(): boolean {
    return this.container.currently.not.isVisible()
  }
}