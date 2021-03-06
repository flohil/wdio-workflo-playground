import { pageObjects as core } from 'wdio-workflo'
import { IPageElementOpts, PageElement, IInputOpts, Input } from '../page_elements';

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's PageNodeStore class.
 * It is supposed to serve as the base PageNodeStore class throughout your project.
 */
export class PageNodeStore extends core.stores.PageNodeStore {

// ELEMENTS

  /**
   *
   * @param selector
   * @param options
   */
  Element(
    selector: Workflo.XPath,
    options?: Pick<IPageElementOpts<this>, Workflo.Store.ElementPublicKeys>
  ) {
    return this._getElement<PageElement<this>, IPageElementOpts<this>>(
      selector,
      PageElement,
      {
        store: this,
        ...options
      }
    )
  }

  ExistElement(
    selector: Workflo.XPath,
    options?: Pick<IPageElementOpts<this>, Exclude<Workflo.Store.ElementPublicKeys, "waitType">>
  ) {
    return this.Element(
      selector,
      {
        waitType: Workflo.WaitType.exist,
        ...options
      }
    )
  }

  Input(
    selector: Workflo.XPath,
    options?: Pick<IInputOpts<this>, 'timeout' | 'waitType'>
  ) {
    return this._getElement<Input<this>, IInputOpts<this>>(
      selector,
      Input,
      {
        store: this,
        ...options
      }
    )
  }

// LISTS

  ElementList(
    selector: Workflo.XPath,
    options?: Workflo.PickPartial<
      core.elements.IPageElementListOpts<
        this, PageElement<this>, Pick<IPageElementOpts<this>, Workflo.Store.ElementPublicKeys>
      >,
      Workflo.Store.ListPublicKeys,
      Workflo.Store.ListPublicPartialKeys
    >
  ) {
    return this.List(
      selector,
      {
        elementOpts: {},
        elementStoreFunc: this.Element,
        ...options
      }
    )
  }

  ExistElementList(
    selector: Workflo.XPath,
    options?: Workflo.PickPartial<
      core.elements.IPageElementListOpts<this, PageElement<this>, Pick<IPageElementOpts<this>, "timeout">>,
      Exclude<Workflo.Store.ListPublicKeys, "waitType">,
      Workflo.Store.ListPublicPartialKeys
    >
  ) {
    return this.List(
      selector,
      {
        elementOpts: {},
        elementStoreFunc: this.ExistElement,
        ...options
      }
    )
  }

// MAPS

  ElementMap<K extends string>(
    selector: Workflo.XPath,
    options: Workflo.PickPartial<
      core.elements.IPageElementMapOpts<
        this, K, PageElement<this>, Pick<IPageElementOpts<this>, Workflo.Store.ElementPublicKeys>
      >,
      Workflo.Store.MapPublicKeys,
      Workflo.Store.MapPublicPartialKeys
    >
  ) {
    return this.Map(
      selector,
      {
        elementStoreFunc: this.Element,
        elementOpts: {},
        ...options
      }
    )
  }

  ExistElementMap<K extends string>(
    selector: Workflo.XPath,
    options: Workflo.PickPartial<
      core.elements.IPageElementMapOpts<
        this, K, PageElement<this>, Pick<IPageElementOpts<this>, Exclude<Workflo.Store.ElementPublicKeys, "waitType">>
      >,
      Workflo.Store.MapPublicKeys,
      Workflo.Store.MapPublicPartialKeys
    >
  ) {
    return this.Map(
      selector,
      {
        elementStoreFunc: this.ExistElement,
        elementOpts: {},
        ...options
      }
    )
  }
}