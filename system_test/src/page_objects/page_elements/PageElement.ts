import { pageObjects as core } from 'wdio-workflo'

import { PageNodeStore } from '../stores'

/**
 * This interface can be used to extend wdio-workflo's IPageElementOpts interface.
 * It is supposed to serve as the base IPageElementOpts interface throughout your project.
 */
export interface IPageElementOpts<
  Store extends PageNodeStore
> extends core.elements.IPageElementOpts<Store> {}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's PageElement class.
 * It is supposed to serve as the base PageElement class throughout your project.
 */
export class PageElement<Store extends PageNodeStore> extends core.elements.PageElement<Store> {

  readonly currently: PageElementCurrently<Store, this>
  readonly wait: PageElementWait<Store, this>
  readonly eventually: PageElementEventually<Store, this>

  testProp: string

  // constructor arguments structure must remain intact:
  // arg1 is selector of type string,
  // arg2 is object that extends baseclass opts with otherwise arbitrary structure - it can be mandatory or optional
  constructor(selector: string, opts?: IPageElementOpts<Store>) {
    super(selector, opts)

    this.testProp = 'testProp in PageElement'

    this.currently = new PageElementCurrently(this)
    this.wait = new PageElementWait(this)
    this.eventually = new PageElementEventually(this)
  }

  printTestValue() {
    return 'testValue in PageElement'
  }
}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's PageElementCurrently
 * class. It is supposed to serve as the base PageElementCurrently class throughout your project.
 */
export class PageElementCurrently<
  Store extends PageNodeStore,
  PageElementType extends PageElement<Store>
> extends core.elements.PageElementCurrently<Store, PageElementType> {
  printBooleanStr() {
    return 'true'
  }

  hasAnyText() {
    return super.hasAnyText()
  }

  get not() {
    return {...super.not,
      printBooleanStr: () => {
        return 'not' + this.printBooleanStr()
      },
      hasAnyText: () => {
        return super.not.hasAnyText()
      }
    }
  }
}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's PageElementWait
 * class. It is supposed to serve as the base PageElementWait class throughout your project.
 */
export class PageElementWait<
  Store extends PageNodeStore,
  PageElementType extends PageElement<Store>
> extends core.elements.PageElementWait<Store, PageElementType> {}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's PageElementEventually
 * class. It is supposed to serve as the base PageElementEventually class throughout your project.
 */
export class PageElementEventually<
  Store extends PageNodeStore,
  PageElementType extends PageElement<Store>
> extends core.elements.PageElementEventually<Store, PageElementType> {}