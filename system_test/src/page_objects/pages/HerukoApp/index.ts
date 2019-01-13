import { CheckboxesPage } from './CheckboxePage'
import { DropdownPage } from './DropdownPage'
import { DynamicControlsPage } from './DynamicControlsPage'
import { DynamicControlsOpenPage } from './DynamicControlsOpenPage'
import { LoginPage } from './LoginPage'
import { HerukoAppPage } from './HerukoAppPage'

export * from './CheckboxePage'
export * from './DropdownPage'
export * from './DynamicControlsPage'
export * from './LoginPage'
export * from './HerukoAppPage'

export const checkboxes = new CheckboxesPage()
export const dynamicControls = new DynamicControlsPage()
export const dropdown = new DropdownPage()
export const login = new LoginPage()
export const base = new HerukoAppPage()
export const dynamicControlsOpen = new DynamicControlsOpenPage()