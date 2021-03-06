import { pageObjects as core, helpers } from 'wdio-workflo'

import { PageNodeStore } from '../stores'
import {
  PageElement,
  PageElementCurrently,
  PageElementEventually,
  PageElementWait,
  IPageElementOpts
} from '../page_elements'

/**
 * This interface can be used to extend wdio-workflo's IValuePageElementOpts interface.
 * It is supposed to serve as the base IValuePageElementOpts interface throughout your project.
 */
export interface IValuePageElementOpts<
  Store extends PageNodeStore
> extends core.elements.IValuePageElementOpts<Store>, IPageElementOpts<Store> {}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's ValuePageElement class.
 * It is supposed to serve as the base ValuePageElement class throughout your project.
 */
export abstract class ValuePageElement<
  Store extends PageNodeStore,
  ValueType
> extends PageElement<Store>
implements core.elements.ValuePageElement<Store, ValueType> {

  readonly abstract currently: ValuePageElementCurrently<Store, this, ValueType>
  readonly wait: ValuePageElementWait<Store, this, ValueType>
  readonly eventually: ValuePageElementEventually<Store, this, ValueType>

  testProp: string;
  testValueProp: string

  constructor(selector: string, opts?: IValuePageElementOpts<Store>) {
    super(selector, opts)

    this.testProp = 'testProp in ValuePageElement'
    this.testValueProp = 'testValueProp in ValuePageElement'

    this.wait = new ValuePageElementWait(this)
    this.eventually = new ValuePageElementEventually(this)

    this.printTestValue()
  }

  printTestValue: () => string

  printValueTestValue() {
    return 'testValue in ValuePageElement'
  }

  abstract setValue(value: ValueType): this;

  getValue: () => ValueType;
  getHasValue: (value: ValueType) => boolean;
  getHasAnyValue: () => boolean;
  getContainsValue: (value: ValueType) => boolean;
}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's ValuePageElementCurrently
 * class. It is supposed to serve as the base ValuePageElementCurrently class throughout your project.
 */
export abstract class ValuePageElementCurrently<
  Store extends PageNodeStore,
  PageElementType extends ValuePageElement<Store, ValueType>,
  ValueType
> extends PageElementCurrently<Store, PageElementType>
implements core.elements.ValuePageElementCurrently<Store, PageElementType, ValueType> {
  abstract getValue(): ValueType
  getHasValue: (value: ValueType) => boolean
  getHasAnyValue: () => boolean
  getContainsValue: (value: ValueType) => boolean
  hasValue: (value: ValueType) => boolean
  hasAnyValue: () => boolean
  containsValue: (value: ValueType) => boolean

  printBooleanStr: () => string

  hasAnyText() {
    return super.hasAnyText()
  }

  readonly not: core.elements.ValuePageElementCurrently<Store, PageElementType, ValueType>['not'] &
    PageElementCurrently<Store, PageElementType>['not']
}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's ValuePageElementWait 
 * class. It is supposed to serve as the base ValuePageElementWait class throughout your project.
 */
export class ValuePageElementWait<
  Store extends PageNodeStore,
  PageElementType extends ValuePageElement<Store, ValueType>,
  ValueType
> extends PageElementWait<Store, PageElementType>
implements core.elements.ValuePageElementWait<Store, PageElementType, ValueType> {
  hasValue: (value: ValueType, opts?: Workflo.ITimeoutReverseInterval) => PageElementType
  hasAnyValue: (opts?: Workflo.ITimeoutReverseInterval) => PageElementType
  containsValue: (value: ValueType, opts?: Workflo.ITimeoutReverseInterval) => PageElementType

  readonly not: core.elements.ValuePageElementWait<Store, PageElementType, ValueType>['not'] &
    PageElementWait<Store, PageElementType>['not']
}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's ValuePageElementEventually
 * class. It is supposed to serve as the base ValuePageElementEventually class throughout your project.
 */
export class ValuePageElementEventually<
  Store extends PageNodeStore,
  PageElementType extends ValuePageElement<Store, ValueType>,
  ValueType
> extends PageElementEventually<Store, PageElementType>
implements core.elements.ValuePageElementEventually<Store, PageElementType, ValueType> {
  hasValue: (value: ValueType, opts?: Workflo.ITimeoutInterval) => boolean
  hasAnyValue: (opts?: Workflo.ITimeoutInterval) => boolean
  containsValue: (value: ValueType, opts?: Workflo.ITimeoutInterval) => boolean

  readonly not: core.elements.ValuePageElementEventually<Store, PageElementType, ValueType>['not'] &
    PageElementEventually<Store, PageElementType>['not']
}

// mixin functionalities of extended PageElement base class -> https://www.typescriptlang.org/docs/handbook/mixins.html

helpers.applyMixins(ValuePageElement, [core.elements.ValuePageElement], ['not']);
helpers.applyMixins(ValuePageElementCurrently, [core.elements.ValuePageElementCurrently], ['not']);
helpers.applyMixins(ValuePageElementWait, [core.elements.ValuePageElementWait], ['not']);
helpers.applyMixins(ValuePageElementEventually, [core.elements.ValuePageElementEventually], ['not']);