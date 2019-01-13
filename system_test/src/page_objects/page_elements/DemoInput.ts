import { DemoStore } from '../stores'
import { ValuePageElement, ValuePageElementCurrently, IValuePageElementOpts } from './ValuePageElement'

export interface IDemoInputOpts<Store extends DemoStore> extends IValuePageElementOpts<Store> {}

export class DemoInput<Store extends DemoStore> extends ValuePageElement<Store, string> {

  readonly currently = new DemoInputCurrently(this)

  setValue(value: string): this {
    this.element.setValue(value)

    return this
  }

  printTestValue = () => {
    return super.printTestValue() + 'testValue in Input'
  }

  printValueTestValue() {
    return super.printValueTestValue() + 'valueTestValue in Input'
  }
}

export class DemoInputCurrently<
  Store extends DemoStore,
  PageElementType extends DemoInput<Store>
> extends ValuePageElementCurrently<Store, PageElementType, string> {

  getValue(): string {
    return this.element.getValue()
  }

  printBooleanStr = () => {
    return super.printBooleanStr() + 'asdf'
  }

  hasAnyText() {
    return super.hasAnyText()
  }

  get not() {
    return {...super.not,
      printBooleanStr: () => {
        return 'not' + super.printBooleanStr()
      },
      hasAnyText: () => {
        return super.not.hasAnyText()
      }
    }
  }
}