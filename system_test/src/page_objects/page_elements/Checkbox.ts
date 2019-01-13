import { DemoStore } from '../stores'
import { ValuePageElement, ValuePageElementCurrently, IValuePageElementOpts } from './ValuePageElement'

export interface ICheckboxOpts<Store extends DemoStore> extends IValuePageElementOpts<Store> {}

export class Checkbox<
  Store extends DemoStore
> extends ValuePageElement<Store, boolean> {

  readonly currently = new CheckboxCurrently(this)

  setValue(value: boolean) {
    this.initialWait()
    return this
  }
}

export class CheckboxCurrently<
  Store extends DemoStore,
  PageElementType extends Checkbox<Store>
> extends ValuePageElementCurrently<Store, PageElementType, boolean> {

  getValue(): boolean {
    return this.element.getValue() === 'on'
  }
}