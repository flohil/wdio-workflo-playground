import { HerukoAppPage, IHerukoAppPageOpts } from './HerukoAppPage'
import { stores } from '?/page_objects'

export interface IDropdownPageOpts extends IHerukoAppPageOpts {

}

export class DropdownPage extends HerukoAppPage {

  constructor(args: IDropdownPageOpts = {}) {
    super(Object.assign(args, {basePath: 'dropdown', elementStore: stores.demo}))
  }

  get dropdown() {
    return this.container.$.Dropdown('//select')
  }

  get defaultOption() {
    return this.dropdown.$.ExistElement(xpath('//option').text('Please select an option'))
  }
}