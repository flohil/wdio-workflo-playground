import { BasePage } from './BasePage'
import { stores } from '?/page_objects'

export interface IGooglePageOpts {

}

export class GooglePage extends BasePage<stores.DemoStore> {

  constructor(args: IGooglePageOpts = {}) {
    super({...args, basePath: '', store: stores.demo})
  }

  get nonExistingDiv() {
    return this.container.$.Element(
      xpath('//div').id('asdf')
    )
  }

  get nonExistingDivList() {
    return this.container.$.ElementList(
      xpath('//div').id('asdf')
    )
  }

  selectNonExisting() {
    this.selectNonExisting1()
  }

  selectNonExisting1() {
    this.selectNonExisting2()
  }

  selectNonExisting2() {
    this.selectNonExisting3()
  }

  selectNonExisting3() {
    this.selectNonExisting4()
  }

  selectNonExisting4() {
    this.selectNonExisting5()
  }

  selectNonExisting5() {
    this.nonExistingDiv.click()
  }

  get logoContainer() {
    return this.container.$.Element(
      xpath('//div').id('hplogo')
    )
  }

  get logo() {
    return this.logoContainer.$.Element(
      xpath('//div').classContains('logo-subtext').levelIndex(1)
    )
  }

  get list() {
    return this.container.$.ExistElementList(
      xpath('//li').class('gb_Z')
    )
  }

  get divList() {
    return this.container.$.ExistElementList(
      xpath('//div')
    )
  }

  get divListConstrained() {
    return this.container.$.ExistElementList(
      xpath('//div').hasChild('//div', xpath => xpath.classContains('s'))
    )
  }

  get anoLogoList() {
    return this.container.$.ElementList(
      xpath('//div').classContains('logo-subtext')
    )
  }

  get logoList() {
    return this.container.$.ElementList(
      xpath('//div').classContains('logo-sub'),
      {
        identifier: {
          mappingObject: {
            "austria": "Österreich"
          },
          mappingFunc: (element) => element.getText()
        }
      }
    )
  }

  get divMap() {
    return this.container.$.ElementMap(
      '//div', {
        identifier: {
          mappingObject: {
            logo: 'logo-subtext',
            logo2: 'logo-subtext'
          },
          mappingFunc: (mapSelector, mappingValue) => xpath(mapSelector).classContains(mappingValue)
        }
      }
    )
  }

  get logoGroup() {
    const page = this

    return this._store.ElementGroup({
      get logo() {
        return page.logoContainer.$.Element(
          xpath('//div') /*.classContains('logo-subtext')*/
        )
      },
      get logoList() {
        return page.logoList
      },
      get anoLogoList() {
        return page.anoLogoList
      },
      get logoMap() {
        return page.divMap
      },
    })
  }

  get input() {
    return this.container.$.Input(xpath('//input').attribute('title', 'Suche'))
  }

  get inputList() {
    return this.container.$.InputList(xpath('//input').attribute('type', 'text'), {
      identifier: {
        mappingObject: {
          search: 'Suche',
        },
        mappingFunc: (element) => element.getAttribute('title')
      }
    })
  }

  get anoInputList() {
    return this.container.$.InputList(xpath('//input').attribute('type', 'text').attribute('title', 'Suche'))
  }

  get inputMap() {
    return this.container.$.InputMap(
      '//input',
      {
        identifier: {
          mappingObject: {
            search: 'Suche'
          },
          mappingFunc: (parentSelector, mappingValue) => xpath(parentSelector).attribute('title', mappingValue)
        }
      }
    )
  }

  get inputGroup() {
    const page = this

    return this._store.ValueGroup({
      get logo() {
        return page.logo
      },
      get input() {
        return page.input
      },
      get inputMap() {
        return page.inputMap
      },
      get inputList() {
        return page.inputList
      },
      get anoInputList() {
        return page.anoInputList
      }
    })
  }
}