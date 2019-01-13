
import { pageObjects as core } from 'wdio-workflo'

import { PageNodeStore } from '../stores'

/**
 * This interface can be used to extend wdio-workflo's IPageOpts interface.
 * It is supposed to serve as the base IPageOpts interface throughout your project.
 */
export interface IPageOpts<
  Store extends PageNodeStore
> extends core.pages.IPageOpts<Store> {}

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's Page class.
 * It is supposed to serve as the base Page class throughout your project.
 */
export abstract class Page<
  Store extends PageNodeStore,
  IsOpenOpts = {},
  IsClosedOpts = IsOpenOpts
> extends core.pages.Page<Store, IsOpenOpts, IsClosedOpts> {

  constructor(opts: IPageOpts<Store>) {
    super(opts)
  }
}