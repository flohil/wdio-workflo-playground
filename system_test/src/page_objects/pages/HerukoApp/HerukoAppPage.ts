import { BasePage } from '../BasePage'
import { stores } from '?/page_objects'

export interface IHerukoAppPageOpts {

}

export class HerukoAppPage extends BasePage<stores.DemoStore> {

  constructor(args: IHerukoAppPageOpts = {}) {
    super({...args, basePath: '', store: stores.demo})
  }

  get container() {
    return this._store.Element(xpath('//div').id('content'))
  }

  isOpen(opts: {path?: string} = {}): boolean {
    return this.container.currently.isVisible()
  }

  // opens a page at the given url path and waits for it to load
  open(opts: {path?: string, timeout?: number} = {}) {
    if (typeof opts.path !== 'undefined') {
      opts.path = `${opts.path}`
    } else {
      opts.path = ''
    }
    const fullPath = `https://the-internet.herokuapp.com/${this.basePath}${opts.path}`

    browser.url(fullPath)

    this.wait.isOpen(opts)
  }
}