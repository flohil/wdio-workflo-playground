import { pageObjects as core } from 'wdio-workflo'

import { PageElementStore } from './PageElementStore';
import { Dropdown, IDropdownOpts, Checkbox, ICheckboxOpts, IDemoInputOpts, DemoInput } from '../page_elements'

type CheckboxOpts<Store extends DemoStore> = Pick<ICheckboxOpts<Store>, Workflo.Store.ElementPublicKeys>

export class DemoStore extends PageElementStore {
  Input(
    selector: Workflo.XPath,
    options?: Pick<IDemoInputOpts<this>, 'timeout' | 'waitType'>
  ) {
    return this._getElement<DemoInput<this>, IDemoInputOpts<this>>(
      selector,
      DemoInput,
      {
        store: this,
        ...options
      }
    )
  }

  InputList(
    selector: Workflo.XPath,
    options?: Workflo.PickPartial<
      core.elements.IValuePageElementListOpts<
        this,
        DemoInput<this>,
        IDemoInputOpts<this>,
        string
      >,
      "waitType" | "timeout" | "disableCache" | "identifier",
      "elementOpts"
    >
  ) {
    return this.ValueList(
      selector,
      {
        elementStoreFunc: this.Input,
        elementOpts: {},
        ...options
      }
    )
  }

  InputMap<K extends string>(
    selector: Workflo.XPath,
    options: Workflo.PickPartial<
      core.elements.IValuePageElementMapOpts<
        this, K, DemoInput<this>, Pick<IDemoInputOpts<this>, 'timeout' | 'waitType'>, string
      >,
      "identifier",
      "elementOpts"
    >
  ) {
    return this.ValueMap(
      selector,
      {
        elementStoreFunc: this.Input,
        elementOpts: {},
        ...options
      }
    )
  }

  Dropdown(
    selector: Workflo.XPath,
    options?: Pick<IDropdownOpts<this>, 'timeout' | 'waitType'>
  ) {
    return this._getElement<Dropdown<this>, IDropdownOpts<this>>(
      selector,
      Dropdown,
      {
        store: this,
        ...options
      }
    )
  }

  Checkbox(
    selector: Workflo.XPath,
    options?: Pick<ICheckboxOpts<this>, 'timeout' | 'waitType'>
  ) {
    return this._getElement<Checkbox<this>, ICheckboxOpts<this>>(
      selector,
      Checkbox,
      {
        store: this,
        ...options
      }
    )
  }

  CheckboxList(
    selector: Workflo.XPath,
    options?: Workflo.PickPartial<
      core.elements.IPageElementListOpts<this, Checkbox<this>, CheckboxOpts<this>>,
      "waitType" | "timeout" | "disableCache" | "identifier",
      "elementOpts"
    >
  ) {
    return this.List(
      selector,
      {
        elementStoreFunc: this.Checkbox,
        elementOpts: {},
        ...options
      }
    )
  }
}


// test if proxying works with IGetValue

// class NumberInput<
//   Store extends pageObjects.stores.PageElementStore,
// > extends pageObjects.elements.ValuePageElement<
//   Store, number
// > {

//   currently: pageObjects.elements.ValuePageElementCurrently<Store, this, number>;

//   constructor(selector: string, opts?: IInputOpts<Store>) {
//     super(selector, opts)

//     this.currently = new NumberInputCurrently(this)
//   }

//   setValue(value: number) {
//     this.initialWait()

//     return this.currently.setValue(value)
//   }
// }

// class NumberInputCurrently<
//   Store extends pageObjects.stores.PageElementStore,
//   PageElementType extends NumberInput<Store>
// > extends pageObjects.elements.ValuePageElementCurrently<Store, PageElementType, number> {
//   getValue(): number {
//     return parseInt(this.element.getValue())
//   }

//   setValue(value: number) {
//     this.element.setValue(value)

//     return this._node
//   }
// }

// // achieved mapping type to input value!!!

// class InputStore extends pageObjects.stores.PageElementStore {
//   Input(
//     selector: Workflo.XPath,
//     options?: Pick<IInputOpts<this>, Workflo.Store.ElementPublicKeys>
//   ) {
//     return this._getElement<Input<this>, IInputOpts<this>>(
//       selector,
//       Input,
//       {
//         store: this,
//         ...options
//       }
//     )
//   }

//   InputList(
//     selector: Workflo.XPath,
//     options?: PickPartial<
//       pageObjects.elements.IValuePageElementListOpts<
//         this, Input<this>, Pick<IInputOpts<this>, Workflo.Store.ElementPublicKeys>, string
//       >,
//       "waitType" | "timeout" | "disableCache" | "identifier",
//       "elementOpts"
//     >
//   ) {
//     return this.ValueList(
//       selector,
//       {
//         elementOpts: {},
//         elementStoreFunc: this.Input,
//         ...options
//       }
//     )
//   }

//   InputMap<K extends string>(
//     selector: Workflo.XPath,
//     options: PickPartial<
//       pageObjects.elements.IPageElementMapOpts<this, K, Input<this>, Pick<IInputOpts<this>, Workflo.Store.ElementPublicKeys>>,
//       Workflo.Store.MapPublicKeys,
//       Workflo.Store.MapPublicPartialKeys
//     >
//   ) {
//     return this.ValueMap(
//       selector,
//       {
//         elementStoreFunc: this.Input,
//         elementOpts: {},
//         ...options
//       }
//     )
//   }
// }

// // REMOVE THIS - just for testing

// const inputStore = new InputStore()

// const innerGroup = pageObjects.stores.pageElement.ValueGroup({
//   x: new Input('//asdf'),
//   y: new NumberInput('//div'),
// })

// const textGroup = pageObjects.stores.pageElement.ElementGroup({
//   x: new Input('//asdf'),
//   y: inputStore.Element('//div')
// })

// // if getvalue is not supported, will always return undefined
// const group = pageObjects.stores.pageElement.ValueGroup({
//   a: new Input('//asdf'),
//   b: new NumberInput('//div'),
//   c: pageObjects.stores.pageElement.Element('//span'),
//   d: inputStore.InputList('//input'),
//   e: inputStore.InputMap('//input', {identifier: {
//     mappingObject: {
//       name: "Name",
//       password: "Password"
//     },
//     func: (mapSelector: string, mappingValue: string) => xpath(mapSelector).text(mappingValue)
//   }}),
//   f: innerGroup,
//   g: textGroup
// })


// const valuesObj = group.getValue()
// const valuesObj2 = {...valuesObj}
// const valuesObj3 = group.currently.getValue()
// const valuesObj4 = group.currently.getText()
// const valuesObj5 = group.getText()
// const valuesObj6 = {...valuesObj5}
// const valuesObj7 = {...valuesObj3}

// // const values: Workflo.PageNode.Values<typeof innerGroup.$> = {
// //   x: 'jodel',
// //   y: 3
// // }

// const values = {
//   x: 'jodel',
//   y: 3,
// }

// const otherValues = {
//   a: 'asdf'
// }

// const mapValues = {
//   name: 'asdf'
// }

// innerGroup.setValue(values)
// innerGroup.currently.setValue(values)

// group.$.e.setValue(mapValues)
// group.$.e.currently.setValue(mapValues)
