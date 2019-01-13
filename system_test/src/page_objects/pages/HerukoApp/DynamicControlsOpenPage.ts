import { IHerukoAppPageOpts } from './HerukoAppPage'
import { stores } from '?/page_objects'
import { DynamicControlsPage } from './DynamicControlsPage';

export interface IDynamicControlsOpenPageOpts extends IHerukoAppPageOpts {

}

export class DynamicControlsOpenPage extends DynamicControlsPage {

  constructor(args: IDynamicControlsOpenPageOpts = {}) {
    super(Object.assign(args, {basePath: 'dynamic_controls', elementStore: stores.demo}))
  }

  isOpen() {
    return this.message.currently.isVisible() && this.message.currently.hasText("It's enabled!")
  }

  isClosed() {
    return this.message.currently.not.isVisible() || this.message.currently.not.hasText("It's enabled!")
  }
}