import { HerukoAppPage, IHerukoAppPageOpts } from './HerukoAppPage'
import { stores } from '?/page_objects'

export interface ILoginPageOpts extends IHerukoAppPageOpts {

}

export class LoginPage extends HerukoAppPage {

  constructor(opts: ILoginPageOpts = {}) {
    super(Object.assign(opts, {basePath: 'dynamic_controls', elementStore: stores.demo}))
  }

  get usernameByName() {
    return this.container.$.Input(
      xpath('//input').name('username')
    )
  }

  get usernameById() {
    return this.container.$.Input(
      xpath('//input').id('username')
    )
  }

  get loginButton() {
    return this.container.$.Element(xpath('//button'))
  }
}