import { HerukoAppPage, IHerukoAppPageOpts } from './HerukoAppPage'
import { stores } from '?/page_objects'

export interface ICheckboxesPageOpts extends IHerukoAppPageOpts {

}

export class CheckboxesPage extends HerukoAppPage {

  constructor(args: ICheckboxesPageOpts = {}) {
    super(Object.assign(args, {basePath: 'checkboxes', elementStore: stores.demo}))
  }

  get checkboxes() {
    return this.container.$.ElementList(xpath('//input').attribute('type', 'checkbox'))
  }
}