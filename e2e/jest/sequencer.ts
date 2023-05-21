const Sequencer = require('@jest/test-sequencer').default;
import { Test } from 'jest-runner';

class CustomSequencer extends Sequencer {
  sort(tests) {
    // Test structure information
    const copyTests: Test[] = Array.from(tests);
    return copyTests.sort((testA, testB) => (testA.path > testB.path ? 1 : -1));
  }
}

module.exports = CustomSequencer;
