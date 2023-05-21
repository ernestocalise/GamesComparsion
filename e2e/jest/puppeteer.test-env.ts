const NodeEnvironment = require('jest-environment-node');
import { Circus, Config } from '@jest/types';

class PuppeteerEnvironment extends NodeEnvironment {
  constructor(config: Config.ProjectConfig, context) {
    super(config, context);

    this.global.hasTestFailures = false;
  }

  handleTestEvent(event: Circus.Event, state: Circus.State) {
    if (event.name === 'test_fn_failure') {
      // Set the hasTestFailures so we can skip the next step
      this.global.hasTestFailures = true;
    }
  }
}

module.exports = PuppeteerEnvironment;
