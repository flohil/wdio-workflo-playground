
import { pageObjects as core } from 'wdio-workflo'

import { PageElementStore } from '../stores'

/**
 * This interface can be used to extend wdio-workflo's IPageOpts interface.
 * It is supposed to serve as the base IPageOpts interface throughout your project.
 */
export interface IPageOpts<
  Store extends PageElementStore
> extends core.pages.IPageOpts<Store> {}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's Page class.
 * It is supposed to serve as the base Page class throughout your project.
 */
export abstract class Page<
  Store extends PageElementStore,
  IsOpenOpts = {},
  IsClosedOpts = IsOpenOpts
> extends core.pages.Page<Store, IsOpenOpts, IsClosedOpts> {

  constructor(opts: IPageOpts<Store>) {
    super(opts)
  }
}