import { PageNodeStore } from '../stores'
import { ValuePageElement, ValuePageElementCurrently, IValuePageElementOpts } from './ValuePageElement'

export interface IInputOpts<
 Store extends PageNodeStore
> extends IValuePageElementOpts<Store> {}

export class Input<Store extends PageNodeStore> extends ValuePageElement<Store, string> {

  constructor(selector: string, opts: IInputOpts<Store>) {
    super(selector, opts)
  }

  readonly currently = new InputCurrently(this)

  setValue(value: string): this {
    this.element.setValue(value)

    return this
  }
}

export class InputCurrently<
  Store extends PageNodeStore,
  PageElementType extends Input<Store>
> extends ValuePageElementCurrently<Store, PageElementType, string> {

  getValue(): string {
    return this.element.getValue()
  }
}