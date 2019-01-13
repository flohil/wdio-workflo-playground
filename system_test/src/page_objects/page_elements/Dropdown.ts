import { DemoStore } from '../stores'
import { ValuePageElement, ValuePageElementCurrently, IValuePageElementOpts } from './ValuePageElement'

export interface IDropdownOpts<Store extends DemoStore> extends IValuePageElementOpts<Store> {}

export class Dropdown<
  Store extends DemoStore
> extends ValuePageElement<Store, string> {

  currently: ValuePageElementCurrently<Store, this, string>;

  get selectField() {
    return this.$.Element(
      '//select'
    )
  }

  get optionsList() {
    return this.$.ExistElementList(
      '//option'
    )
  }

  setValue(value: string): this {
    this.selectField.click()
    this.optionsList.where.text(value).getFirst().click()

    return this
  }
}

export class DropdownCurrently<
  Store extends DemoStore,
  PageElementType extends Dropdown<Store>
> extends ValuePageElementCurrently<Store, PageElementType, string> {

  getValue(): string {
    return this._node.optionsList.where.selected().getFirst().currently.getText()
  }
}