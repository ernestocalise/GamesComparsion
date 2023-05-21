import CONFIG from './environment/env.config';

module.exports = {
  testRegex: ['./tests/better/02-getDataFromSnai.test.js',
    './tests/better/01-getDataFromBetter.test.js',
    './tests/better/03-MatchData.test.js']
    ,//testRegex: testRegex(),
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    setupFilesAfterEnv: ['jest-expect-message'],
    // The time out that JEST will use to mark a async test as invalid
    // We add a small delay here since we use the Timeout as a generic timeout for the
    // waitForTimeout(...)
    testTimeout: CONFIG.E2E_TIMEOUT_PUPPETEER + 5000,
    verbose: true,
    testSequencer: '<rootDir>/jest/sequencer',
    reporters: ['<rootDir>/jest/reporter.config', 'default'],
    testRunner: 'jest-circus/runner',
    testEnvironment: '<rootDir>/jest/puppeteer.test-env',
    globalTeardown: '<rootDir>/jest/global-teardown',
    globalSetup: '<rootDir>/jest/global-setup'
};

function testRegex() {
    const projectsToBeTested = getTestsForProject();
    let testRegexpr = `tests/${projectsToBeTested}/(.+)/(.+\\.test\\.js)?$`;
    if (CONFIG.E2E_COUNTRY_TESTING) {
        testRegexpr = `tests/${projectsToBeTested}/${CONFIG.E2E_COUNTRY_TESTING}/(.+\\.test\\.js)?$`;
    }
    return testRegexpr;
}

function getTestsForProject(): string {
    const projectToTest: string[] = [];
    let regexToReturn: string;
    if (projectToTest.length === 0) {
        regexToReturn = '(.+)';
    } else {
        regexToReturn = '(' + projectToTest.join('|') + ')';
    }
    return regexToReturn;
}
