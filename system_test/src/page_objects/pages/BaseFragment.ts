import { PageNodeStore } from '../stores'
import { Page, IPageOpts } from './Page'

export interface IBaseFragmentPageOpts<Store extends PageNodeStore> extends IPageOpts<Store> {
  containerSelector: string
}

export class BaseFragment<Store extends PageNodeStore> extends Page<Store> {

  protected _containerSelector: string

  constructor(args: IBaseFragmentPageOpts<Store>) {
    super(args)

    this._containerSelector = args.containerSelector
  }

  get container() {
    return this._store
      .Element(this._containerSelector)
  }

  isOpen(): boolean {
    return this.container.currently.isVisible()
  }

  isClosed(): boolean {
    return !this.isOpen()
  }
}