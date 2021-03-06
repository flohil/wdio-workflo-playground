import { IWorkfloConfig } from 'wdio-workflo'

const testDir = __dirname + '/system_test'

const workfloConfig: IWorkfloConfig = {
  testDir: testDir,
  baseUrl: 'http://www.google.com/',
  width: 1280,
  height: 800,
  capabilities: {
    browserName: 'chrome'
  },
  timeouts: {
    default: 5000
  },
  intervals: {
    default: 500
  },
  allure: {
    issueTrackerPattern: 'http://example.com/issues/%s',
    testManagementPattern: 'http://example.com/tms/%s',
  }
}

export default workfloConfig